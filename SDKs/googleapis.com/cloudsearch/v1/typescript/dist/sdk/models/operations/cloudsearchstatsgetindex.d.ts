import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchStatsGetIndexQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchStatsGetIndexSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsGetIndexSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsGetIndexSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchStatsGetIndexSecurity extends SpeakeasyBase {
    option1?: CloudsearchStatsGetIndexSecurityOption1;
    option2?: CloudsearchStatsGetIndexSecurityOption2;
    option3?: CloudsearchStatsGetIndexSecurityOption3;
}
export declare class CloudsearchStatsGetIndexRequest extends SpeakeasyBase {
    queryParams: CloudsearchStatsGetIndexQueryParams;
    security: CloudsearchStatsGetIndexSecurity;
}
export declare class CloudsearchStatsGetIndexResponse extends SpeakeasyBase {
    contentType: string;
    getCustomerIndexStatsResponse?: shared.GetCustomerIndexStatsResponse;
    statusCode: number;
}
