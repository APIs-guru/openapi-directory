import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FieldReference
/** 
 * A reference to a field in a document, ex: `stats.operations`.
**/
export class FieldReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=fieldPath" })
  fieldPath?: string;
}
