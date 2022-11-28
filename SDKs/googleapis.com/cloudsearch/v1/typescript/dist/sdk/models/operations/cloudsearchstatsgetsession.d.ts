import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchStatsGetSessionQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchStatsGetSessionSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsGetSessionSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsGetSessionSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsGetSessionSecurity extends SpeakeasyBase {
    option1?: CloudsearchStatsGetSessionSecurityOption1;
    option2?: CloudsearchStatsGetSessionSecurityOption2;
    option3?: CloudsearchStatsGetSessionSecurityOption3;
}
export declare class CloudsearchStatsGetSessionRequest extends SpeakeasyBase {
    queryParams: CloudsearchStatsGetSessionQueryParams;
    security: CloudsearchStatsGetSessionSecurity;
}
export declare class CloudsearchStatsGetSessionResponse extends SpeakeasyBase {
    contentType: string;
    getCustomerSessionStatsResponse?: shared.GetCustomerSessionStatsResponse;
    statusCode: number;
}
