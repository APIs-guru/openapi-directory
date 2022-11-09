import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLinodeIPsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class GetLinodeIPsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetLinodeIPsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLinodeIPsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLinodeIPsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLinodeIPsSecurityOption2;
}


export class GetLinodeIPsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLinodeIPsPathParams;

  @Metadata()
  security: GetLinodeIPsSecurity;
}


export class GetLinodeIPsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLinodeIPsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLinodeIPs200ApplicationJsonAny?: any;

  @Metadata()
  getLinodeIPsDefaultApplicationJsonObject?: GetLinodeIPsDefaultApplicationJson;
}
