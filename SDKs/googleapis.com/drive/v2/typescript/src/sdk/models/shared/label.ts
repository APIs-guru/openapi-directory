import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LabelField } from "./labelfield";



// Label
/** 
 * Representation of a label and its fields.
**/
export class Label extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields", elemType: LabelField })
  fields?: Map<string, LabelField>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;
}
