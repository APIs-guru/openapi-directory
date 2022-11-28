import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNodeBalancerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;
}


export class GetNodeBalancerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetNodeBalancerDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetNodeBalancerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNodeBalancerPathParams;

  @SpeakeasyMetadata()
  security: GetNodeBalancerSecurity;
}


export class GetNodeBalancerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nodeBalancer?: shared.NodeBalancer;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNodeBalancerDefaultApplicationJsonObject?: GetNodeBalancerDefaultApplicationJson;
}
