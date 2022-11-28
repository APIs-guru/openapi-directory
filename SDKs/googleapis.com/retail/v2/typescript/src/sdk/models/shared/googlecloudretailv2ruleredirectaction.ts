import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2RuleRedirectAction
/** 
 * Redirects a shopper to a specific page. * Rule Condition: - Must specify Condition.query_terms. * Action Input: Request Query * Action Result: Redirects shopper to provided uri.
**/
export class GoogleCloudRetailV2RuleRedirectAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=redirectUri" })
  redirectUri?: string;
}
