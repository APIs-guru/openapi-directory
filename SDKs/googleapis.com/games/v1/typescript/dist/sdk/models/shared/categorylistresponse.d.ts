import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
/**
 * A third party list metagame categories response.
**/
export declare class CategoryListResponse extends SpeakeasyBase {
    items?: Category[];
    kind?: string;
    nextPageToken?: string;
}
