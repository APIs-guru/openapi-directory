import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RescueLinodeInstancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class RescueLinodeInstanceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=devices" })
  devices?: shared.RescueDevices;
}


export class RescueLinodeInstanceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class RescueLinodeInstanceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class RescueLinodeInstanceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: RescueLinodeInstanceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: RescueLinodeInstanceSecurityOption2;
}


export class RescueLinodeInstanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RescueLinodeInstancePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: RescueLinodeInstanceRequestBody;

  @Metadata()
  security: RescueLinodeInstanceSecurity;
}


export class RescueLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class RescueLinodeInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  rescueLinodeInstance200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  rescueLinodeInstanceDefaultApplicationJsonObject?: RescueLinodeInstanceDefaultApplicationJson;
}
