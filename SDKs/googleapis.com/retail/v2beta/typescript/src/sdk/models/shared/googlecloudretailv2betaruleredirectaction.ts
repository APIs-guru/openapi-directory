import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2betaRuleRedirectAction
/** 
 * Redirects a shopper to a specific page. * Rule Condition: - Must specify Condition.query_terms. * Action Input: Request Query * Action Result: Redirects shopper to provided uri.
**/
export class GoogleCloudRetailV2betaRuleRedirectAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=redirectUri" })
  redirectUri?: string;
}
