import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLinodeVolumesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class GetLinodeVolumesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetLinodeVolumesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetLinodeVolumesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLinodeVolumesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLinodeVolumesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLinodeVolumesSecurityOption2;
}


export class GetLinodeVolumesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLinodeVolumesPathParams;

  @Metadata()
  queryParams: GetLinodeVolumesQueryParams;

  @Metadata()
  security: GetLinodeVolumesSecurity;
}


export class GetLinodeVolumes200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Volume })
  data?: shared.Volume[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetLinodeVolumesDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLinodeVolumesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLinodeVolumes200ApplicationJsonObject?: GetLinodeVolumes200ApplicationJson;

  @Metadata()
  getLinodeVolumesDefaultApplicationJsonObject?: GetLinodeVolumesDefaultApplicationJson;
}
