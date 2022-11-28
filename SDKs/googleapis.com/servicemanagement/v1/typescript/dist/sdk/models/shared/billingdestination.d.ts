import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration of a specific billing destination (Currently only support bill against consumer project).
**/
export declare class BillingDestination extends SpeakeasyBase {
    metrics?: string[];
    monitoredResource?: string;
}
