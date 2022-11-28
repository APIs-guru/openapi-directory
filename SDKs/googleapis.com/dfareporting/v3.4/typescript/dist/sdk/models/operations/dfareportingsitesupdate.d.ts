import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingSitesUpdatePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingSitesUpdateQueryParams extends SpeakeasyBase {
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
export declare class DfareportingSitesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingSitesUpdateRequest extends SpeakeasyBase {
    pathParams: DfareportingSitesUpdatePathParams;
    queryParams: DfareportingSitesUpdateQueryParams;
    request?: shared.Site;
    security: DfareportingSitesUpdateSecurity;
}
export declare class DfareportingSitesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    site?: shared.Site;
    statusCode: number;
}
