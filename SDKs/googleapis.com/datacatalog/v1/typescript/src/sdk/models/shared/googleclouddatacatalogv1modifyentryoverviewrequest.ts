import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatacatalogV1EntryOverview } from "./googleclouddatacatalogv1entryoverview";


// GoogleCloudDatacatalogV1ModifyEntryOverviewRequest
/** 
 * Request message for ModifyEntryOverview.
**/
export class GoogleCloudDatacatalogV1ModifyEntryOverviewRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entryOverview" })
  entryOverview?: GoogleCloudDatacatalogV1EntryOverview;
}
