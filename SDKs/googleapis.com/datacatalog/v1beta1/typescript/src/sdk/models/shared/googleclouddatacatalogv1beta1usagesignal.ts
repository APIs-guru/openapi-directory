import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1UsageStats } from "./googleclouddatacatalogv1beta1usagestats";



// GoogleCloudDatacatalogV1beta1UsageSignal
/** 
 * The set of all usage signals that we store in Data Catalog.
**/
export class GoogleCloudDatacatalogV1beta1UsageSignal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=usageWithinTimeRange", elemType: GoogleCloudDatacatalogV1beta1UsageStats })
  usageWithinTimeRange?: Map<string, GoogleCloudDatacatalogV1beta1UsageStats>;
}
