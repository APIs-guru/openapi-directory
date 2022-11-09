import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { File } from "./file";


// FileList
/** 
 * A list of files.
**/
export class FileList extends SpeakeasyBase {
  @Metadata({ data: "json, name=files", elemType: shared.File })
  files?: File[];

  @Metadata({ data: "json, name=incompleteSearch" })
  incompleteSearch?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
