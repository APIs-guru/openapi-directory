import { SpeakeasyBase } from "../../../internal/utils";
import { MoreHoursType } from "./morehourstype";
import { ServiceType } from "./servicetype";
/**
 * A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see `categories.list`.
**/
export declare class CategoryInput extends SpeakeasyBase {
    name?: string;
}
/**
 * A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see `categories.list`.
**/
export declare class Category extends SpeakeasyBase {
    displayName?: string;
    moreHoursTypes?: MoreHoursType[];
    name?: string;
    serviceTypes?: ServiceType[];
}
