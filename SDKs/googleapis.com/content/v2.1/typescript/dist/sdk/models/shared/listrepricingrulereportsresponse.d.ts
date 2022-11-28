import { SpeakeasyBase } from "../../../internal/utils";
import { RepricingRuleReport } from "./repricingrulereport";
/**
 * Response message for the ListRepricingRuleReports method.
**/
export declare class ListRepricingRuleReportsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    repricingRuleReports?: RepricingRuleReport[];
}
