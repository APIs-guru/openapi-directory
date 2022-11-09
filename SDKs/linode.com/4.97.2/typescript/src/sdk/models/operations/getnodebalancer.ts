import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNodeBalancerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;
}


export class GetNodeBalancerSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetNodeBalancerSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetNodeBalancerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetNodeBalancerSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetNodeBalancerSecurityOption2;
}


export class GetNodeBalancerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNodeBalancerPathParams;

  @Metadata()
  security: GetNodeBalancerSecurity;
}


export class GetNodeBalancerDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetNodeBalancerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nodeBalancer?: shared.NodeBalancer;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNodeBalancerDefaultApplicationJsonObject?: GetNodeBalancerDefaultApplicationJson;
}
