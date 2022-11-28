import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateNodeBalancerConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;
}


export class UpdateNodeBalancerConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class UpdateNodeBalancerConfigDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateNodeBalancerConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNodeBalancerConfigPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.NodeBalancerConfigInput;

  @SpeakeasyMetadata()
  security: UpdateNodeBalancerConfigSecurity;
}


export class UpdateNodeBalancerConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nodeBalancerConfig?: shared.NodeBalancerConfig;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNodeBalancerConfigDefaultApplicationJsonObject?: UpdateNodeBalancerConfigDefaultApplicationJson;
}
