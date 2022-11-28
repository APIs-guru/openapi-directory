import { SpeakeasyBase } from "../../../internal/utils";
import { MoreHoursType } from "./morehourstype";
import { ServiceType } from "./servicetype";
/**
 * A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see [categories.list](https://developers.google.com/my-business/reference/rest/v4/categories/list).
**/
export declare class CategoryInput extends SpeakeasyBase {
    categoryId?: string;
    displayName?: string;
}
/**
 * A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see [categories.list](https://developers.google.com/my-business/reference/rest/v4/categories/list).
**/
export declare class Category extends SpeakeasyBase {
    categoryId?: string;
    displayName?: string;
    moreHoursTypes?: MoreHoursType[];
    serviceTypes?: ServiceType[];
}
