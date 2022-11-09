import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StructuredDataObject } from "./structureddataobject";


// ItemStructuredData
/** 
 * Available structured data fields for the item.
**/
export class ItemStructuredData extends SpeakeasyBase {
  @Metadata({ data: "json, name=hash" })
  hash?: string;

  @Metadata({ data: "json, name=object" })
  object?: StructuredDataObject;
}
