import { SpeakeasyBase } from "../../../internal/utils";
import { RepricingRule } from "./repricingrule";
/**
 * Response message for the `ListRepricingRules` method.
**/
export declare class ListRepricingRulesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    repricingRules?: RepricingRule[];
}
