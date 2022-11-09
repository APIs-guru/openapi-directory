import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetServiceTransferPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class GetServiceTransferSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetServiceTransferSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetServiceTransferSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetServiceTransferSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetServiceTransferSecurityOption2;
}


export class GetServiceTransferRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetServiceTransferPathParams;

  @Metadata()
  security: GetServiceTransferSecurity;
}


export class GetServiceTransferDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetServiceTransferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceTransfer?: shared.ServiceTransfer;

  @Metadata()
  statusCode: number;

  @Metadata()
  getServiceTransferDefaultApplicationJsonObject?: GetServiceTransferDefaultApplicationJson;
}
