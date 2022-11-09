import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatacatalogV1beta1SystemTimestamps } from "./googleclouddatacatalogv1beta1systemtimestamps";


// GoogleCloudDatacatalogV1beta1EntryGroup
/** 
 * EntryGroup Metadata. An EntryGroup resource represents a logical grouping of zero or more Data Catalog Entry resources.
**/
export class GoogleCloudDatacatalogV1beta1EntryGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataCatalogTimestamps" })
  dataCatalogTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestamps;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
