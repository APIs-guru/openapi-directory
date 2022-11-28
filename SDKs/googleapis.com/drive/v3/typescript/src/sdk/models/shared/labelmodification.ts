import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LabelFieldModification } from "./labelfieldmodification";



// LabelModification
/** 
 * A modification to a label on a file. A LabelModification can be used to apply a label to a file, update an existing label on a file, or remove a label from a file.
**/
export class LabelModification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldModifications", elemType: LabelFieldModification })
  fieldModifications?: LabelFieldModification[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=labelId" })
  labelId?: string;

  @SpeakeasyMetadata({ data: "json, name=removeLabel" })
  removeLabel?: boolean;
}
