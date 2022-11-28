import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateIpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class UpdateIpSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class UpdateIpDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateIpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateIpPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.IpAddressInput;

  @SpeakeasyMetadata()
  security: UpdateIpSecurity;
}


export class UpdateIpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ipAddress?: shared.IpAddress;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateIpDefaultApplicationJsonObject?: UpdateIpDefaultApplicationJson;
}
