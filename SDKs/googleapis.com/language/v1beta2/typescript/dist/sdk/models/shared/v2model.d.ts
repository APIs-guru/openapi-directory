import { SpeakeasyBase } from "../../../internal/utils";
export declare enum V2ModelContentCategoriesVersionEnum {
    ContentCategoriesVersionUnspecified = "CONTENT_CATEGORIES_VERSION_UNSPECIFIED",
    V1 = "V1",
    V2 = "V2"
}
/**
 * Options for the V2 model.
**/
export declare class V2Model extends SpeakeasyBase {
    contentCategoriesVersion?: V2ModelContentCategoriesVersionEnum;
}
