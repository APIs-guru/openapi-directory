import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";



// DocumentChange
/** 
 * A Document has changed. May be the result of multiple writes, including deletes, that ultimately resulted in a new value for the Document. Multiple DocumentChange messages may be returned for the same logical change, if multiple targets are affected.
**/
export class DocumentChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: Document;

  @SpeakeasyMetadata({ data: "json, name=removedTargetIds" })
  removedTargetIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=targetIds" })
  targetIds?: number[];
}
