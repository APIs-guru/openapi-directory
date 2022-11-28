import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum MybusinessbusinessinformationCategoriesListViewEnum {
    CategoryViewUnspecified = "CATEGORY_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class MybusinessbusinessinformationCategoriesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    regionCode?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: MybusinessbusinessinformationCategoriesListViewEnum;
}
export declare class MybusinessbusinessinformationCategoriesListRequest extends SpeakeasyBase {
    queryParams: MybusinessbusinessinformationCategoriesListQueryParams;
}
export declare class MybusinessbusinessinformationCategoriesListResponse extends SpeakeasyBase {
    contentType: string;
    listCategoriesResponse?: shared.ListCategoriesResponse;
    statusCode: number;
}
