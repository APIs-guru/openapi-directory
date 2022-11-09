import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StructuredDataObject } from "./structureddataobject";


// ObjectValues
/** 
 * List of object values.
**/
export class ObjectValues extends SpeakeasyBase {
  @Metadata({ data: "json, name=values", elemType: shared.StructuredDataObject })
  values?: StructuredDataObject[];
}
