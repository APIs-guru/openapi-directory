import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1UsageStats } from "./googleclouddatacatalogv1usagestats";
/**
 * The set of all usage signals that Data Catalog stores. Note: Usually, these signals are updated daily. In rare cases, an update may fail but will be performed again on the next day.
**/
export declare class GoogleCloudDatacatalogV1UsageSignalInput extends SpeakeasyBase {
    updateTime?: string;
}
/**
 * The set of all usage signals that Data Catalog stores. Note: Usually, these signals are updated daily. In rare cases, an update may fail but will be performed again on the next day.
**/
export declare class GoogleCloudDatacatalogV1UsageSignal extends SpeakeasyBase {
    updateTime?: string;
    usageWithinTimeRange?: Map<string, GoogleCloudDatacatalogV1UsageStats>;
}
