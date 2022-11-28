import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";



// FileList
/** 
 * A list of files.
**/
export class FileList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=files", elemType: File })
  files?: File[];

  @SpeakeasyMetadata({ data: "json, name=incompleteSearch" })
  incompleteSearch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
