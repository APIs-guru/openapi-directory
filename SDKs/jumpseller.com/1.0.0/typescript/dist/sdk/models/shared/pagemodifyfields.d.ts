import { SpeakeasyBase } from "../../../internal/utils";
import { PageCategory } from "./pagecategory";
/**
 * Image of the Page
**/
export declare class PageModifyFieldsImage extends SpeakeasyBase {
    id?: number;
    url?: string;
}
export declare enum PageModifyFieldsStatusEnum {
    Public = "public",
    Draft = "draft",
    Hidden = "hidden"
}
export declare class PageModifyFields extends SpeakeasyBase {
    body?: string;
    categories?: PageCategory[];
    image?: PageModifyFieldsImage;
    metaDescription?: string;
    pageTitle?: string;
    permalink?: string;
    status?: PageModifyFieldsStatusEnum;
    template?: number;
    title?: string;
}
