import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Paging } from "./paging";
import { File } from "./file";
/**
 * Collections of files
**/
export declare class CollectionResponseFile extends SpeakeasyBase {
    paging?: Paging;
    results: File[];
}
