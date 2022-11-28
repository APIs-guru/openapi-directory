import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ShutdownLinodeInstancePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class ShutdownLinodeInstanceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class ShutdownLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class ShutdownLinodeInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ShutdownLinodeInstancePathParams;

  @SpeakeasyMetadata()
  security: ShutdownLinodeInstanceSecurity;
}


export class ShutdownLinodeInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  shutdownLinodeInstance200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  shutdownLinodeInstanceDefaultApplicationJsonObject?: ShutdownLinodeInstanceDefaultApplicationJson;
}
