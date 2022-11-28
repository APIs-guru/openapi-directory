import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetadataItem } from "./metadataitem";



// Metadata
/** 
 * A Compute Engine metadata entry. Identical to the metadata on the corresponding Compute Engine resource.
**/
export class Metadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fingerPrint" })
  fingerPrint?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: MetadataItem })
  items?: MetadataItem[];
}
