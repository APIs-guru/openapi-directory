import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddLinodeIpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class AddLinodeIpSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class AddLinodeIpDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class AddLinodeIpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddLinodeIpPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;

  @SpeakeasyMetadata()
  security: AddLinodeIpSecurity;
}


export class AddLinodeIpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ipAddress?: shared.IpAddress;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addLinodeIpDefaultApplicationJsonObject?: AddLinodeIpDefaultApplicationJson;
}
