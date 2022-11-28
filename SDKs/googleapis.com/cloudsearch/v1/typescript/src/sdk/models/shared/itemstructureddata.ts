import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StructuredDataObject } from "./structureddataobject";



// ItemStructuredData
/** 
 * Available structured data fields for the item.
**/
export class ItemStructuredData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hash" })
  hash?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: StructuredDataObject;
}
