import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEntityTransferPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class GetEntityTransferSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetEntityTransferSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetEntityTransferSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetEntityTransferSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetEntityTransferSecurityOption2;
}


export class GetEntityTransferRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEntityTransferPathParams;

  @Metadata()
  security: GetEntityTransferSecurity;
}


export class GetEntityTransferDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetEntityTransferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  entityTransfer?: shared.EntityTransfer;

  @Metadata()
  statusCode: number;

  @Metadata()
  getEntityTransferDefaultApplicationJsonObject?: GetEntityTransferDefaultApplicationJson;
}
