import { SpeakeasyBase } from "../../../internal/utils";
export declare class CategoryItems extends SpeakeasyBase {
    badgeUrl?: string;
    categoryId?: string;
    name?: string;
}
export declare class Category extends SpeakeasyBase {
    items?: CategoryItems[];
    kind?: string;
}
