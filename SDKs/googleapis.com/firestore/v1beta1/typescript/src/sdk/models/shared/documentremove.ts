import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DocumentRemove
/** 
 * A Document has been removed from the view of the targets. Sent if the document is no longer relevant to a target and is out of view. Can be sent instead of a DocumentDelete or a DocumentChange if the server can not send the new value of the document. Multiple DocumentRemove messages may be returned for the same logical write or delete, if multiple targets are affected.
**/
export class DocumentRemove extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: string;

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;

  @SpeakeasyMetadata({ data: "json, name=removedTargetIds" })
  removedTargetIds?: number[];
}
