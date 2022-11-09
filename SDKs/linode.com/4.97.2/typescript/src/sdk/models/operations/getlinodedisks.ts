import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLinodeDisksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class GetLinodeDisksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetLinodeDisksSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetLinodeDisksSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLinodeDisksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLinodeDisksSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLinodeDisksSecurityOption2;
}


export class GetLinodeDisksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLinodeDisksPathParams;

  @Metadata()
  queryParams: GetLinodeDisksQueryParams;

  @Metadata()
  security: GetLinodeDisksSecurity;
}


export class GetLinodeDisks200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Disk })
  data?: shared.Disk[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetLinodeDisksDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLinodeDisksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLinodeDisks200ApplicationJsonObject?: GetLinodeDisks200ApplicationJson;

  @Metadata()
  getLinodeDisksDefaultApplicationJsonObject?: GetLinodeDisksDefaultApplicationJson;
}
