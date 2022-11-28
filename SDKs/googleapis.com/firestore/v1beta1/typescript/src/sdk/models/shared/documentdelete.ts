import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DocumentDelete
/** 
 * A Document has been deleted. May be the result of multiple writes, including updates, the last of which deleted the Document. Multiple DocumentDelete messages may be returned for the same logical delete, if multiple targets are affected.
**/
export class DocumentDelete extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: string;

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;

  @SpeakeasyMetadata({ data: "json, name=removedTargetIds" })
  removedTargetIds?: number[];
}
