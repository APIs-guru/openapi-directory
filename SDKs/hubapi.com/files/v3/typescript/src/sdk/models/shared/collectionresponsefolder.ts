import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Paging } from "./paging";
import { Folder } from "./folder";



export class CollectionResponseFolder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=paging" })
  paging?: Paging;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: Folder })
  results: Folder[];
}
