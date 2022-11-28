import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FolderUpdateTaskLocator
/** 
 * Information on the task that has been started, and where to check it's status.
**/
export class FolderUpdateTaskLocator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, string>;
}
