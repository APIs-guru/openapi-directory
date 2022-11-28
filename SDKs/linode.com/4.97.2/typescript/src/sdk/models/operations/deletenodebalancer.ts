import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteNodeBalancerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" })
  nodeBalancerId: number;
}


export class DeleteNodeBalancerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeleteNodeBalancerDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteNodeBalancerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteNodeBalancerPathParams;

  @SpeakeasyMetadata()
  security: DeleteNodeBalancerSecurity;
}


export class DeleteNodeBalancerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteNodeBalancer200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deleteNodeBalancerDefaultApplicationJsonObject?: DeleteNodeBalancerDefaultApplicationJson;
}
