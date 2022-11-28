import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingSitesPatchPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingSitesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingSitesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingSitesPatchRequest extends SpeakeasyBase {
    pathParams: DfareportingSitesPatchPathParams;
    queryParams: DfareportingSitesPatchQueryParams;
    request?: shared.Site;
    security: DfareportingSitesPatchSecurity;
}
export declare class DfareportingSitesPatchResponse extends SpeakeasyBase {
    contentType: string;
    site?: shared.Site;
    statusCode: number;
}
