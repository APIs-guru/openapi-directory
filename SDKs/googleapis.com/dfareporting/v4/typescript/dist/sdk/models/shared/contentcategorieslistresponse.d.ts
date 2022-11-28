import { SpeakeasyBase } from "../../../internal/utils";
import { ContentCategory } from "./contentcategory";
/**
 * Content Category List Response
**/
export declare class ContentCategoriesListResponse extends SpeakeasyBase {
    contentCategories?: ContentCategory[];
    kind?: string;
    nextPageToken?: string;
}
