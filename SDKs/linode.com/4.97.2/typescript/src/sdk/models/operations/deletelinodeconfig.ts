import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteLinodeConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class DeleteLinodeConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeleteLinodeConfigDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteLinodeConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteLinodeConfigPathParams;

  @SpeakeasyMetadata()
  security: DeleteLinodeConfigSecurity;
}


export class DeleteLinodeConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteLinodeConfig200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deleteLinodeConfigDefaultApplicationJsonObject?: DeleteLinodeConfigDefaultApplicationJson;
}
