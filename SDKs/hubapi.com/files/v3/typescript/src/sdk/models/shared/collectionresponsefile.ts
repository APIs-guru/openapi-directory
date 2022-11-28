import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Paging } from "./paging";
import { File } from "./file";



// CollectionResponseFile
/** 
 * Collections of files
**/
export class CollectionResponseFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=paging" })
  paging?: Paging;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: File })
  results: File[];
}
