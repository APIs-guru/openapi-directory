import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Paging } from "./paging";
import { File } from "./file";


// CollectionResponseFile
/** 
 * Collections of files
**/
export class CollectionResponseFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=paging" })
  paging?: Paging;

  @Metadata({ data: "json, name=results", elemType: shared.File })
  results: File[];
}
