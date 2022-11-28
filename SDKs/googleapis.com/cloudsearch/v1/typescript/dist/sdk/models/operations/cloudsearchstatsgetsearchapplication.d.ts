import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchStatsGetSearchapplicationQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    endDateDay?: number;
    endDateMonth?: number;
    endDateYear?: number;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startDateDay?: number;
    startDateMonth?: number;
    startDateYear?: number;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudsearchStatsGetSearchapplicationSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsGetSearchapplicationSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsGetSearchapplicationSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsGetSearchapplicationSecurity extends SpeakeasyBase {
    option1?: CloudsearchStatsGetSearchapplicationSecurityOption1;
    option2?: CloudsearchStatsGetSearchapplicationSecurityOption2;
    option3?: CloudsearchStatsGetSearchapplicationSecurityOption3;
}
export declare class CloudsearchStatsGetSearchapplicationRequest extends SpeakeasyBase {
    queryParams: CloudsearchStatsGetSearchapplicationQueryParams;
    security: CloudsearchStatsGetSearchapplicationSecurity;
}
export declare class CloudsearchStatsGetSearchapplicationResponse extends SpeakeasyBase {
    contentType: string;
    getCustomerSearchApplicationStatsResponse?: shared.GetCustomerSearchApplicationStatsResponse;
    statusCode: number;
}
