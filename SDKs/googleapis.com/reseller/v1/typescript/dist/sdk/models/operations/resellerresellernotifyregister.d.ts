import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResellerResellernotifyRegisterQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    serviceAccountEmailAddress?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ResellerResellernotifyRegisterSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ResellerResellernotifyRegisterRequest extends SpeakeasyBase {
    queryParams: ResellerResellernotifyRegisterQueryParams;
    security: ResellerResellernotifyRegisterSecurity;
}
export declare class ResellerResellernotifyRegisterResponse extends SpeakeasyBase {
    contentType: string;
    resellernotifyResource?: shared.ResellernotifyResource;
    statusCode: number;
}
