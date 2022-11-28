import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteNodeBalancerConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" })
  configId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;
}


export class DeleteNodeBalancerConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeleteNodeBalancerConfigDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteNodeBalancerConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteNodeBalancerConfigPathParams;

  @SpeakeasyMetadata()
  security: DeleteNodeBalancerConfigSecurity;
}


export class DeleteNodeBalancerConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteNodeBalancerConfig200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deleteNodeBalancerConfigDefaultApplicationJsonObject?: DeleteNodeBalancerConfigDefaultApplicationJson;
}
