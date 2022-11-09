import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVolumesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetVolumesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetVolumesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetVolumesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetVolumesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetVolumesSecurityOption2;
}


export class GetVolumesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetVolumesQueryParams;

  @Metadata()
  security: GetVolumesSecurity;
}


export class GetVolumes200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Volume })
  data?: shared.Volume[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetVolumesDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetVolumesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getVolumes200ApplicationJsonObject?: GetVolumes200ApplicationJson;

  @Metadata()
  getVolumesDefaultApplicationJsonObject?: GetVolumesDefaultApplicationJson;
}
