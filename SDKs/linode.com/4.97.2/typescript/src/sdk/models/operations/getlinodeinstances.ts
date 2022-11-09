import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLinodeInstancesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetLinodeInstancesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetLinodeInstancesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLinodeInstancesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLinodeInstancesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLinodeInstancesSecurityOption2;
}


export class GetLinodeInstancesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLinodeInstancesQueryParams;

  @Metadata()
  security: GetLinodeInstancesSecurity;
}


export class GetLinodeInstances200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Linode })
  data?: shared.Linode[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetLinodeInstancesDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLinodeInstancesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLinodeInstances200ApplicationJsonObject?: GetLinodeInstances200ApplicationJson;

  @Metadata()
  getLinodeInstancesDefaultApplicationJsonObject?: GetLinodeInstancesDefaultApplicationJson;
}
