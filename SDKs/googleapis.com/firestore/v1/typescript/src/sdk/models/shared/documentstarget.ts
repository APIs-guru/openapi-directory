import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DocumentsTarget
/** 
 * A target specified by a set of documents names.
**/
export class DocumentsTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documents" })
  documents?: string[];
}
