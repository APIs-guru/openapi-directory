import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1SystemTimestampsInput } from "./googleclouddatacatalogv1beta1systemtimestamps";
import { GoogleCloudDatacatalogV1beta1SystemTimestamps } from "./googleclouddatacatalogv1beta1systemtimestamps";



// GoogleCloudDatacatalogV1beta1EntryGroupInput
/** 
 * EntryGroup Metadata. An EntryGroup resource represents a logical grouping of zero or more Data Catalog Entry resources.
**/
export class GoogleCloudDatacatalogV1beta1EntryGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataCatalogTimestamps" })
  dataCatalogTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestampsInput;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GoogleCloudDatacatalogV1beta1EntryGroup
/** 
 * EntryGroup Metadata. An EntryGroup resource represents a logical grouping of zero or more Data Catalog Entry resources.
**/
export class GoogleCloudDatacatalogV1beta1EntryGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataCatalogTimestamps" })
  dataCatalogTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestamps;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
