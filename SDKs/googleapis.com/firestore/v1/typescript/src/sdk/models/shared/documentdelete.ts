import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DocumentDelete
/** 
 * A Document has been deleted. May be the result of multiple writes, including updates, the last of which deleted the Document. Multiple DocumentDelete messages may be returned for the same logical delete, if multiple targets are affected.
**/
export class DocumentDelete extends SpeakeasyBase {
  @Metadata({ data: "json, name=document" })
  document?: string;

  @Metadata({ data: "json, name=readTime" })
  readTime?: string;

  @Metadata({ data: "json, name=removedTargetIds" })
  removedTargetIds?: number[];
}
