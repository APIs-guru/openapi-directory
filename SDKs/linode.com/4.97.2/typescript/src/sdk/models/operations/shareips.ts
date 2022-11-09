import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ShareIPsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class ShareIPsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class ShareIPsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ShareIPsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ShareIPsSecurityOption2;
}


export class ShareIPsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;

  @Metadata()
  security: ShareIPsSecurity;
}


export class ShareIPsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class ShareIPsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  shareIPs200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  shareIPsDefaultApplicationJsonObject?: ShareIPsDefaultApplicationJson;
}
