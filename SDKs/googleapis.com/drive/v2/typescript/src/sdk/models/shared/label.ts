import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LabelField } from "./labelfield";


// Label
/** 
 * Representation of a label and its fields.
**/
export class Label extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields", elemType: shared.LabelField })
  fields?: Map<string, LabelField>;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;
}
