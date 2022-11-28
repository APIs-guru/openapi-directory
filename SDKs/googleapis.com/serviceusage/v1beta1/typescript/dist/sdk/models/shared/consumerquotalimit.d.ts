import { SpeakeasyBase } from "../../../internal/utils";
import { QuotaBucket } from "./quotabucket";
/**
 * Consumer quota settings for a quota limit.
**/
export declare class ConsumerQuotaLimit extends SpeakeasyBase {
    allowsAdminOverrides?: boolean;
    isPrecise?: boolean;
    metric?: string;
    name?: string;
    quotaBuckets?: QuotaBucket[];
    supportedLocations?: string[];
    unit?: string;
}
