import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1EntryOverview } from "./googleclouddatacatalogv1entryoverview";



// GoogleCloudDatacatalogV1ModifyEntryOverviewRequest
/** 
 * Request message for ModifyEntryOverview.
**/
export class GoogleCloudDatacatalogV1ModifyEntryOverviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entryOverview" })
  entryOverview?: GoogleCloudDatacatalogV1EntryOverview;
}
