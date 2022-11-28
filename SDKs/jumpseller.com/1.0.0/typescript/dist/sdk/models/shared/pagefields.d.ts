import { SpeakeasyBase } from "../../../internal/utils";
import { PageCategory } from "./pagecategory";
import { PageTemplate } from "./pagetemplate";
/**
 * Image of the Page
**/
export declare class PageFieldsImage extends SpeakeasyBase {
    id?: number;
    url?: string;
}
export declare enum PageFieldsStatusEnum {
    Public = "public",
    Draft = "draft",
    Hidden = "hidden"
}
export declare class PageFields extends SpeakeasyBase {
    body?: string;
    categories?: PageCategory[];
    id?: number;
    image?: PageFieldsImage;
    legal?: boolean;
    metaDescription?: string;
    pageTitle?: string;
    permalink?: string;
    status?: PageFieldsStatusEnum;
    template?: PageTemplate;
    title?: string;
}
