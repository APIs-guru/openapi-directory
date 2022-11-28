import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1UsageStats } from "./googleclouddatacatalogv1beta1usagestats";
/**
 * The set of all usage signals that we store in Data Catalog.
**/
export declare class GoogleCloudDatacatalogV1beta1UsageSignal extends SpeakeasyBase {
    updateTime?: string;
    usageWithinTimeRange?: Map<string, GoogleCloudDatacatalogV1beta1UsageStats>;
}
