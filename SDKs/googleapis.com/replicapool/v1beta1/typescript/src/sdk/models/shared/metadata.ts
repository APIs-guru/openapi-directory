import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetadataItem } from "./metadataitem";


// Metadata
/** 
 * A Compute Engine metadata entry. Identical to the metadata on the corresponding Compute Engine resource.
**/
export class Metadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=fingerPrint" })
  fingerPrint?: string;

  @Metadata({ data: "json, name=items", elemType: shared.MetadataItem })
  items?: MetadataItem[];
}
