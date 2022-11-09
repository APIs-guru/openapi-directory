import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatacatalogV1Contacts } from "./googleclouddatacatalogv1contacts";
import { GoogleCloudDatacatalogV1EntryOverview } from "./googleclouddatacatalogv1entryoverview";


// GoogleCloudDatacatalogV1BusinessContext
/** 
 * Business Context of the entry.
**/
export class GoogleCloudDatacatalogV1BusinessContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=contacts" })
  contacts?: GoogleCloudDatacatalogV1Contacts;

  @Metadata({ data: "json, name=entryOverview" })
  entryOverview?: GoogleCloudDatacatalogV1EntryOverview;
}
