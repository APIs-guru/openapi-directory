import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateLinodeIpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class UpdateLinodeIpSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class UpdateLinodeIpDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateLinodeIpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateLinodeIpPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.IpAddressInput;

  @SpeakeasyMetadata()
  security: UpdateLinodeIpSecurity;
}


export class UpdateLinodeIpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ipAddress?: shared.IpAddress;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateLinodeIpDefaultApplicationJsonObject?: UpdateLinodeIpDefaultApplicationJson;
}
