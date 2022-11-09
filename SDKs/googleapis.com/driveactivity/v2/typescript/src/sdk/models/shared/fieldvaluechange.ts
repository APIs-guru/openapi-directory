import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldValue } from "./fieldvalue";
import { FieldValue } from "./fieldvalue";


// FieldValueChange
/** 
 * Change to a Field value.
**/
export class FieldValueChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=fieldId" })
  fieldId?: string;

  @Metadata({ data: "json, name=newValue" })
  newValue?: FieldValue;

  @Metadata({ data: "json, name=oldValue" })
  oldValue?: FieldValue;
}
