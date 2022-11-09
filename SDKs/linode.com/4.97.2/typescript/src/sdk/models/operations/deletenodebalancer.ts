import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteNodeBalancerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;
}


export class DeleteNodeBalancerSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteNodeBalancerSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteNodeBalancerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteNodeBalancerSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteNodeBalancerSecurityOption2;
}


export class DeleteNodeBalancerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNodeBalancerPathParams;

  @Metadata()
  security: DeleteNodeBalancerSecurity;
}


export class DeleteNodeBalancerDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteNodeBalancerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteNodeBalancer200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteNodeBalancerDefaultApplicationJsonObject?: DeleteNodeBalancerDefaultApplicationJson;
}
