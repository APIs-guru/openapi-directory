import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1Contacts } from "./googleclouddatacatalogv1contacts";
import { GoogleCloudDatacatalogV1EntryOverview } from "./googleclouddatacatalogv1entryoverview";



// GoogleCloudDatacatalogV1BusinessContext
/** 
 * Business Context of the entry.
**/
export class GoogleCloudDatacatalogV1BusinessContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contacts" })
  contacts?: GoogleCloudDatacatalogV1Contacts;

  @SpeakeasyMetadata({ data: "json, name=entryOverview" })
  entryOverview?: GoogleCloudDatacatalogV1EntryOverview;
}
