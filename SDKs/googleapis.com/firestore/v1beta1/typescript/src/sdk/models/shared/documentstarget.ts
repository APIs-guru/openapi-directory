import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DocumentsTarget
/** 
 * A target specified by a set of documents names.
**/
export class DocumentsTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=documents" })
  documents?: string[];
}
