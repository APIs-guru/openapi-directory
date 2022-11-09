import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ResellerResellernotifyGetwatchdetailsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ResellerResellernotifyGetwatchdetailsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ResellerResellernotifyGetwatchdetailsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ResellerResellernotifyGetwatchdetailsSecurity extends SpeakeasyBase {
    option1?: ResellerResellernotifyGetwatchdetailsSecurityOption1;
    option2?: ResellerResellernotifyGetwatchdetailsSecurityOption2;
}
export declare class ResellerResellernotifyGetwatchdetailsRequest extends SpeakeasyBase {
    queryParams: ResellerResellernotifyGetwatchdetailsQueryParams;
    security: ResellerResellernotifyGetwatchdetailsSecurity;
}
export declare class ResellerResellernotifyGetwatchdetailsResponse extends SpeakeasyBase {
    contentType: string;
    resellernotifyGetwatchdetailsResponse?: shared.ResellernotifyGetwatchdetailsResponse;
    statusCode: number;
}
