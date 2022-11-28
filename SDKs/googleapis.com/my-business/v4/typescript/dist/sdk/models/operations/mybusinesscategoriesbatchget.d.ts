import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum MybusinessCategoriesBatchGetViewEnum {
    CategoryViewUnspecified = "CATEGORY_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class MybusinessCategoriesBatchGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    categoryIds?: string[];
    fields?: string;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    regionCode?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: MybusinessCategoriesBatchGetViewEnum;
}
export declare class MybusinessCategoriesBatchGetRequest extends SpeakeasyBase {
    queryParams: MybusinessCategoriesBatchGetQueryParams;
}
export declare class MybusinessCategoriesBatchGetResponse extends SpeakeasyBase {
    batchGetBusinessCategoriesResponse?: shared.BatchGetBusinessCategoriesResponse;
    contentType: string;
    statusCode: number;
}
