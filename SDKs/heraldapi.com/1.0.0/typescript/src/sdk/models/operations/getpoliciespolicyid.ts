import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPoliciesPolicyIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=policy_id" })
  policyId: string;
}


export class GetPoliciesPolicyId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: shared.Policy;
}


export class GetPoliciesPolicyIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPoliciesPolicyIdPathParams;
}


export class GetPoliciesPolicyIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPoliciesPolicyId200ApplicationJsonObject?: GetPoliciesPolicyId200ApplicationJson;
}
