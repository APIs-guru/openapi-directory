import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Paging } from "./paging";
import { Folder } from "./folder";


export class CollectionResponseFolder extends SpeakeasyBase {
  @Metadata({ data: "json, name=paging" })
  paging?: Paging;

  @Metadata({ data: "json, name=results", elemType: shared.Folder })
  results: Folder[];
}
