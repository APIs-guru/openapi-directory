import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LabelFieldModification
/** 
 * A modification to a label's field.
**/
export class LabelFieldModification extends SpeakeasyBase {
  @Metadata({ data: "json, name=fieldId" })
  fieldId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=setDateValues" })
  setDateValues?: Date[];

  @Metadata({ data: "json, name=setIntegerValues" })
  setIntegerValues?: string[];

  @Metadata({ data: "json, name=setSelectionValues" })
  setSelectionValues?: string[];

  @Metadata({ data: "json, name=setTextValues" })
  setTextValues?: string[];

  @Metadata({ data: "json, name=setUserValues" })
  setUserValues?: string[];

  @Metadata({ data: "json, name=unsetValues" })
  unsetValues?: boolean;
}
