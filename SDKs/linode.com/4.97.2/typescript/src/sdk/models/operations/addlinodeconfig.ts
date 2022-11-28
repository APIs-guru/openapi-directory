import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddLinodeConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class AddLinodeConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class AddLinodeConfigDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class AddLinodeConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddLinodeConfigPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.LinodeConfigInput;

  @SpeakeasyMetadata()
  security: AddLinodeConfigSecurity;
}


export class AddLinodeConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  linodeConfig?: shared.LinodeConfig;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addLinodeConfigDefaultApplicationJsonObject?: AddLinodeConfigDefaultApplicationJson;
}
