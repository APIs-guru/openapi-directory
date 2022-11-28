import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetadataItem
/** 
 * A Compute Engine metadata item, defined as a key:value pair. Identical to the metadata on the corresponding Compute Engine resource.
**/
export class MetadataItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
