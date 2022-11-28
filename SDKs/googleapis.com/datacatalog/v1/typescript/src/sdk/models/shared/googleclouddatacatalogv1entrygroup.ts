import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1SystemTimestampsInput } from "./googleclouddatacatalogv1systemtimestamps";
import { GoogleCloudDatacatalogV1SystemTimestamps } from "./googleclouddatacatalogv1systemtimestamps";



// GoogleCloudDatacatalogV1EntryGroupInput
/** 
 * Entry group metadata. An `EntryGroup` resource represents a logical grouping of zero or more Data Catalog Entry resources.
**/
export class GoogleCloudDatacatalogV1EntryGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataCatalogTimestamps" })
  dataCatalogTimestamps?: GoogleCloudDatacatalogV1SystemTimestampsInput;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GoogleCloudDatacatalogV1EntryGroup
/** 
 * Entry group metadata. An `EntryGroup` resource represents a logical grouping of zero or more Data Catalog Entry resources.
**/
export class GoogleCloudDatacatalogV1EntryGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataCatalogTimestamps" })
  dataCatalogTimestamps?: GoogleCloudDatacatalogV1SystemTimestamps;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
