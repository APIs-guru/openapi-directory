import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNodebalancersNodeBalancerIdStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;
}


export class GetNodebalancersNodeBalancerIdStatsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetNodebalancersNodeBalancerIdStatsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetNodebalancersNodeBalancerIdStatsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetNodebalancersNodeBalancerIdStatsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetNodebalancersNodeBalancerIdStatsSecurityOption2;
}


export class GetNodebalancersNodeBalancerIdStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNodebalancersNodeBalancerIdStatsPathParams;

  @Metadata()
  security: GetNodebalancersNodeBalancerIdStatsSecurity;
}


export class GetNodebalancersNodeBalancerIdStatsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetNodebalancersNodeBalancerIdStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getNodebalancersNodeBalancerIdStatsDefaultApplicationJsonObject?: GetNodebalancersNodeBalancerIdStatsDefaultApplicationJson;

  @Metadata()
  nodeBalancerStats?: shared.NodeBalancerStats;

  @Metadata()
  statusCode: number;
}
