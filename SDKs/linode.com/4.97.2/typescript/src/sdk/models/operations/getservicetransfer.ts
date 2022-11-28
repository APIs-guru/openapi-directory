import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetServiceTransferPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class GetServiceTransferSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetServiceTransferDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetServiceTransferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetServiceTransferPathParams;

  @SpeakeasyMetadata()
  security: GetServiceTransferSecurity;
}


export class GetServiceTransferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceTransfer?: shared.ServiceTransfer;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getServiceTransferDefaultApplicationJsonObject?: GetServiceTransferDefaultApplicationJson;
}
