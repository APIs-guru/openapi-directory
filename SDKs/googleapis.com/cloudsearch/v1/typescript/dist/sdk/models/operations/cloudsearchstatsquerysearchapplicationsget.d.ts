import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchStatsQuerySearchapplicationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsearchStatsQuerySearchapplicationsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    fromDateDay?: number;
    fromDateMonth?: number;
    fromDateYear?: number;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    toDateDay?: number;
    toDateMonth?: number;
    toDateYear?: number;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudsearchStatsQuerySearchapplicationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsQuerySearchapplicationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsQuerySearchapplicationsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsQuerySearchapplicationsGetSecurity extends SpeakeasyBase {
    option1?: CloudsearchStatsQuerySearchapplicationsGetSecurityOption1;
    option2?: CloudsearchStatsQuerySearchapplicationsGetSecurityOption2;
    option3?: CloudsearchStatsQuerySearchapplicationsGetSecurityOption3;
}
export declare class CloudsearchStatsQuerySearchapplicationsGetRequest extends SpeakeasyBase {
    pathParams: CloudsearchStatsQuerySearchapplicationsGetPathParams;
    queryParams: CloudsearchStatsQuerySearchapplicationsGetQueryParams;
    security: CloudsearchStatsQuerySearchapplicationsGetSecurity;
}
export declare class CloudsearchStatsQuerySearchapplicationsGetResponse extends SpeakeasyBase {
    contentType: string;
    getSearchApplicationQueryStatsResponse?: shared.GetSearchApplicationQueryStatsResponse;
    statusCode: number;
}
