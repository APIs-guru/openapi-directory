import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum WebfontsWebfontsListSortEnum {
    SortUndefined = "SORT_UNDEFINED",
    Alpha = "ALPHA",
    Date = "DATE",
    Popularity = "POPULARITY",
    Style = "STYLE",
    Trending = "TRENDING"
}
export declare class WebfontsWebfontsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sort?: WebfontsWebfontsListSortEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class WebfontsWebfontsListRequest extends SpeakeasyBase {
    queryParams: WebfontsWebfontsListQueryParams;
}
export declare class WebfontsWebfontsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webfontList?: shared.WebfontList;
}
