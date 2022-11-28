import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2betaRuleRedirectAction
/** 
 * Redirects a shopper to a specific page. * Rule Condition: - Must specify Condition.query_terms. * Action Input: Request Query * Action Result: Redirects shopper to provided uri.
**/
export class GoogleCloudRetailV2betaRuleRedirectAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=redirectUri" })
  redirectUri?: string;
}
