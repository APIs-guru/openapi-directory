import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchStatsSessionSearchapplicationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsearchStatsSessionSearchapplicationsGetQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchStatsSessionSearchapplicationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsSessionSearchapplicationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsSessionSearchapplicationsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsSessionSearchapplicationsGetSecurity extends SpeakeasyBase {
    option1?: CloudsearchStatsSessionSearchapplicationsGetSecurityOption1;
    option2?: CloudsearchStatsSessionSearchapplicationsGetSecurityOption2;
    option3?: CloudsearchStatsSessionSearchapplicationsGetSecurityOption3;
}
export declare class CloudsearchStatsSessionSearchapplicationsGetRequest extends SpeakeasyBase {
    pathParams: CloudsearchStatsSessionSearchapplicationsGetPathParams;
    queryParams: CloudsearchStatsSessionSearchapplicationsGetQueryParams;
    security: CloudsearchStatsSessionSearchapplicationsGetSecurity;
}
export declare class CloudsearchStatsSessionSearchapplicationsGetResponse extends SpeakeasyBase {
    contentType: string;
    getSearchApplicationSessionStatsResponse?: shared.GetSearchApplicationSessionStatsResponse;
    statusCode: number;
}
