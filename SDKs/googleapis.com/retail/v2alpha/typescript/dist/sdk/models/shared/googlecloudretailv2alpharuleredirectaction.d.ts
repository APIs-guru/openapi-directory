import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Redirects a shopper to a specific page. * Rule Condition: - Must specify Condition.query_terms. * Action Input: Request Query * Action Result: Redirects shopper to provided uri.
**/
export declare class GoogleCloudRetailV2alphaRuleRedirectAction extends SpeakeasyBase {
    redirectUri?: string;
}
