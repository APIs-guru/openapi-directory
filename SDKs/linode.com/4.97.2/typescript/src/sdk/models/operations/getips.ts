import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetIPsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetIPsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetIPsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetIPsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetIPsSecurityOption2;
}


export class GetIPsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetIPsSecurity;
}


export class GetIPs200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.IpAddress })
  data?: shared.IpAddress[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetIPsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetIPsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getIPs200ApplicationJsonObject?: GetIPs200ApplicationJson;

  @Metadata()
  getIPsDefaultApplicationJsonObject?: GetIPsDefaultApplicationJson;
}
