import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchStatsUserSearchapplicationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsearchStatsUserSearchapplicationsGetQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchStatsUserSearchapplicationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsUserSearchapplicationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsUserSearchapplicationsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsUserSearchapplicationsGetSecurity extends SpeakeasyBase {
    option1?: CloudsearchStatsUserSearchapplicationsGetSecurityOption1;
    option2?: CloudsearchStatsUserSearchapplicationsGetSecurityOption2;
    option3?: CloudsearchStatsUserSearchapplicationsGetSecurityOption3;
}
export declare class CloudsearchStatsUserSearchapplicationsGetRequest extends SpeakeasyBase {
    pathParams: CloudsearchStatsUserSearchapplicationsGetPathParams;
    queryParams: CloudsearchStatsUserSearchapplicationsGetQueryParams;
    security: CloudsearchStatsUserSearchapplicationsGetSecurity;
}
export declare class CloudsearchStatsUserSearchapplicationsGetResponse extends SpeakeasyBase {
    contentType: string;
    getSearchApplicationUserStatsResponse?: shared.GetSearchApplicationUserStatsResponse;
    statusCode: number;
}
