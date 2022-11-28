import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateNodeBalancerConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;
}


export class CreateNodeBalancerConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CreateNodeBalancerConfigDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateNodeBalancerConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNodeBalancerConfigPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.NodeBalancerConfigInput;

  @SpeakeasyMetadata()
  security: CreateNodeBalancerConfigSecurity;
}


export class CreateNodeBalancerConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nodeBalancerConfig?: shared.NodeBalancerConfig;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNodeBalancerConfigDefaultApplicationJsonObject?: CreateNodeBalancerConfigDefaultApplicationJson;
}
