import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTransferSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetTransferSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetTransferSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetTransferSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetTransferSecurityOption2;
}


export class GetTransferRequest extends SpeakeasyBase {
  @Metadata()
  security: GetTransferSecurity;
}


export class GetTransferDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetTransferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  transfer?: shared.Transfer;

  @Metadata()
  getTransferDefaultApplicationJsonObject?: GetTransferDefaultApplicationJson;
}
