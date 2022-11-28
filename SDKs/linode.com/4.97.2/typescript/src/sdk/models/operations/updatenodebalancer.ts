import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateNodeBalancerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;
}


export class UpdateNodeBalancerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class UpdateNodeBalancerDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateNodeBalancerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNodeBalancerPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.NodeBalancerInput;

  @SpeakeasyMetadata()
  security: UpdateNodeBalancerSecurity;
}


export class UpdateNodeBalancerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nodeBalancer?: shared.NodeBalancer;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNodeBalancerDefaultApplicationJsonObject?: UpdateNodeBalancerDefaultApplicationJson;
}
