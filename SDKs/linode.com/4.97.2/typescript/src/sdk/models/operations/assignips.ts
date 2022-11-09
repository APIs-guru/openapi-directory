import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AssignIPsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class AssignIPsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AssignIPsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AssignIPsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AssignIPsSecurityOption2;
}


export class AssignIPsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;

  @Metadata()
  security: AssignIPsSecurity;
}


export class AssignIPsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class AssignIPsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  assignIPs200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  assignIPsDefaultApplicationJsonObject?: AssignIPsDefaultApplicationJson;
}
