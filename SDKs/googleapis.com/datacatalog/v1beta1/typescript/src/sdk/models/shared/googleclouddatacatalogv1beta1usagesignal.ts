import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1beta1UsageStats } from "./googleclouddatacatalogv1beta1usagestats";


// GoogleCloudDatacatalogV1beta1UsageSignal
/** 
 * The set of all usage signals that we store in Data Catalog.
**/
export class GoogleCloudDatacatalogV1beta1UsageSignal extends SpeakeasyBase {
  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=usageWithinTimeRange", elemType: shared.GoogleCloudDatacatalogV1beta1UsageStats })
  usageWithinTimeRange?: Map<string, GoogleCloudDatacatalogV1beta1UsageStats>;
}
