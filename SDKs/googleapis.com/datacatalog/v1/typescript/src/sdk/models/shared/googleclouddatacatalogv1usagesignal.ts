import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1UsageStats } from "./googleclouddatacatalogv1usagestats";



// GoogleCloudDatacatalogV1UsageSignalInput
/** 
 * The set of all usage signals that Data Catalog stores. Note: Usually, these signals are updated daily. In rare cases, an update may fail but will be performed again on the next day.
**/
export class GoogleCloudDatacatalogV1UsageSignalInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// GoogleCloudDatacatalogV1UsageSignal
/** 
 * The set of all usage signals that Data Catalog stores. Note: Usually, these signals are updated daily. In rare cases, an update may fail but will be performed again on the next day.
**/
export class GoogleCloudDatacatalogV1UsageSignal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=usageWithinTimeRange", elemType: GoogleCloudDatacatalogV1UsageStats })
  usageWithinTimeRange?: Map<string, GoogleCloudDatacatalogV1UsageStats>;
}
