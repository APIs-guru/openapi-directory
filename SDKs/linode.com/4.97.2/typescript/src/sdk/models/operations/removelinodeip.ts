import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveLinodeIpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class RemoveLinodeIpSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class RemoveLinodeIpDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class RemoveLinodeIpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveLinodeIpPathParams;

  @SpeakeasyMetadata()
  security: RemoveLinodeIpSecurity;
}


export class RemoveLinodeIpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  removeLinodeIp200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  removeLinodeIpDefaultApplicationJsonObject?: RemoveLinodeIpDefaultApplicationJson;
}
