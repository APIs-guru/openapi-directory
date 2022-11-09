import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1UsageStats } from "./googleclouddatacatalogv1usagestats";


// GoogleCloudDatacatalogV1UsageSignal
/** 
 * The set of all usage signals that Data Catalog stores. Note: Usually, these signals are updated daily. In rare cases, an update may fail but will be performed again on the next day.
**/
export class GoogleCloudDatacatalogV1UsageSignal extends SpeakeasyBase {
  @Metadata({ data: "json, name=favoriteCount" })
  favoriteCount?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=usageWithinTimeRange", elemType: shared.GoogleCloudDatacatalogV1UsageStats })
  usageWithinTimeRange?: Map<string, GoogleCloudDatacatalogV1UsageStats>;
}
