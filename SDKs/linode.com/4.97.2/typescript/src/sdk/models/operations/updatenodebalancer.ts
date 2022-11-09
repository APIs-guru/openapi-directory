import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateNodeBalancerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;
}


export class UpdateNodeBalancerSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateNodeBalancerSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateNodeBalancerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateNodeBalancerSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateNodeBalancerSecurityOption2;
}


export class UpdateNodeBalancerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNodeBalancerPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.NodeBalancer;

  @Metadata()
  security: UpdateNodeBalancerSecurity;
}


export class UpdateNodeBalancerDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateNodeBalancerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nodeBalancer?: shared.NodeBalancer;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNodeBalancerDefaultApplicationJsonObject?: UpdateNodeBalancerDefaultApplicationJson;
}
