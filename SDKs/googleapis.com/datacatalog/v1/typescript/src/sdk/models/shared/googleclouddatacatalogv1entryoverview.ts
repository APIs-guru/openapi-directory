import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatacatalogV1EntryOverview
/** 
 * Entry overview fields for rich text descriptions of entries.
**/
export class GoogleCloudDatacatalogV1EntryOverview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=overview" })
  overview?: string;
}
