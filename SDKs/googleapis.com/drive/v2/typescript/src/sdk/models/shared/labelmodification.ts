import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LabelFieldModification } from "./labelfieldmodification";


// LabelModification
/** 
 * A modification to a label on a file. A LabelModification can be used to apply a label to a file, update an existing label on a file, or remove a label from a file.
**/
export class LabelModification extends SpeakeasyBase {
  @Metadata({ data: "json, name=fieldModifications", elemType: shared.LabelFieldModification })
  fieldModifications?: LabelFieldModification[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=labelId" })
  labelId?: string;

  @Metadata({ data: "json, name=removeLabel" })
  removeLabel?: boolean;
}
