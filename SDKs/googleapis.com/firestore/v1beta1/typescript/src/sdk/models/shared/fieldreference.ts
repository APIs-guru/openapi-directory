import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FieldReference
/** 
 * A reference to a field in a document, ex: `stats.operations`.
**/
export class FieldReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldPath" })
  fieldPath?: string;
}
