import { SpeakeasyBase } from "../../../internal/utils";
import { Paging } from "./paging";
import { Folder } from "./folder";
export declare class CollectionResponseFolder extends SpeakeasyBase {
    paging?: Paging;
    results: Folder[];
}
