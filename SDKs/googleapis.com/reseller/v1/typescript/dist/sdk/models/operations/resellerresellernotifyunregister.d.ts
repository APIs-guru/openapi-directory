import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ResellerResellernotifyUnregisterQueryParams extends SpeakeasyBase {
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
export declare class ResellerResellernotifyUnregisterSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ResellerResellernotifyUnregisterRequest extends SpeakeasyBase {
    queryParams: ResellerResellernotifyUnregisterQueryParams;
    security: ResellerResellernotifyUnregisterSecurity;
}
export declare class ResellerResellernotifyUnregisterResponse extends SpeakeasyBase {
    contentType: string;
    resellernotifyResource?: shared.ResellernotifyResource;
    statusCode: number;
}
