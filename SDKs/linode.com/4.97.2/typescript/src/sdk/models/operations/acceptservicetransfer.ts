import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AcceptServiceTransferPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class AcceptServiceTransferSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class AcceptServiceTransferSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AcceptServiceTransferSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AcceptServiceTransferSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AcceptServiceTransferSecurityOption2;
}


export class AcceptServiceTransferRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AcceptServiceTransferPathParams;

  @Metadata()
  security: AcceptServiceTransferSecurity;
}


export class AcceptServiceTransferDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class AcceptServiceTransferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  acceptServiceTransfer200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  acceptServiceTransferDefaultApplicationJsonObject?: AcceptServiceTransferDefaultApplicationJson;
}
