import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum MybusinessCategoriesListViewEnum {
    CategoryViewUnspecified = "CATEGORY_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class MybusinessCategoriesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    regionCode?: string;
    searchTerm?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: MybusinessCategoriesListViewEnum;
}
export declare class MybusinessCategoriesListRequest extends SpeakeasyBase {
    queryParams: MybusinessCategoriesListQueryParams;
}
export declare class MybusinessCategoriesListResponse extends SpeakeasyBase {
    contentType: string;
    listBusinessCategoriesResponse?: shared.ListBusinessCategoriesResponse;
    statusCode: number;
}
