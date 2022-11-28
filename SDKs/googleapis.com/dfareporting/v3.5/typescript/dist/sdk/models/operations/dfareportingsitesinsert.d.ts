import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingSitesInsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingSitesInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingSitesInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingSitesInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingSitesInsertPathParams;
    queryParams: DfareportingSitesInsertQueryParams;
    request?: shared.Site;
    security: DfareportingSitesInsertSecurity;
}
export declare class DfareportingSitesInsertResponse extends SpeakeasyBase {
    contentType: string;
    site?: shared.Site;
    statusCode: number;
}
