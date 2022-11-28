import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum MybusinessbusinessinformationCategoriesBatchGetViewEnum {
    CategoryViewUnspecified = "CATEGORY_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class MybusinessbusinessinformationCategoriesBatchGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    languageCode?: string;
    names?: string[];
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    regionCode?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: MybusinessbusinessinformationCategoriesBatchGetViewEnum;
}
export declare class MybusinessbusinessinformationCategoriesBatchGetRequest extends SpeakeasyBase {
    queryParams: MybusinessbusinessinformationCategoriesBatchGetQueryParams;
}
export declare class MybusinessbusinessinformationCategoriesBatchGetResponse extends SpeakeasyBase {
    batchGetCategoriesResponse?: shared.BatchGetCategoriesResponse;
    contentType: string;
    statusCode: number;
}
