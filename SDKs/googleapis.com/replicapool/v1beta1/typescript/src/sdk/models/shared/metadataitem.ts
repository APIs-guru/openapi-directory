import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetadataItem
/** 
 * A Compute Engine metadata item, defined as a key:value pair. Identical to the metadata on the corresponding Compute Engine resource.
**/
export class MetadataItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
