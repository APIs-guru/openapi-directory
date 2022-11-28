import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StructuredDataObject } from "./structureddataobject";



// ObjectValues
/** 
 * List of object values.
**/
export class ObjectValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values", elemType: StructuredDataObject })
  values?: StructuredDataObject[];
}
