import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNodebalancersNodeBalancerIdStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;
}


export class GetNodebalancersNodeBalancerIdStatsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetNodebalancersNodeBalancerIdStatsDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetNodebalancersNodeBalancerIdStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNodebalancersNodeBalancerIdStatsPathParams;

  @SpeakeasyMetadata()
  security: GetNodebalancersNodeBalancerIdStatsSecurity;
}


export class GetNodebalancersNodeBalancerIdStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getNodebalancersNodeBalancerIdStatsDefaultApplicationJsonObject?: GetNodebalancersNodeBalancerIdStatsDefaultApplicationJson;

  @SpeakeasyMetadata()
  nodeBalancerStats?: shared.NodeBalancerStats;

  @SpeakeasyMetadata()
  statusCode: number;
}
