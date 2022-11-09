import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Document } from "./document";


// DocumentChange
/** 
 * A Document has changed. May be the result of multiple writes, including deletes, that ultimately resulted in a new value for the Document. Multiple DocumentChange messages may be returned for the same logical change, if multiple targets are affected.
**/
export class DocumentChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=document" })
  document?: Document;

  @Metadata({ data: "json, name=removedTargetIds" })
  removedTargetIds?: number[];

  @Metadata({ data: "json, name=targetIds" })
  targetIds?: number[];
}
