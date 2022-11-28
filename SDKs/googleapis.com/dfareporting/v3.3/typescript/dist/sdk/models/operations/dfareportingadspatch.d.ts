import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAdsPatchPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingAdsPatchQueryParams extends SpeakeasyBase {
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
export declare class DfareportingAdsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAdsPatchRequest extends SpeakeasyBase {
    pathParams: DfareportingAdsPatchPathParams;
    queryParams: DfareportingAdsPatchQueryParams;
    request?: shared.Ad;
    security: DfareportingAdsPatchSecurity;
}
export declare class DfareportingAdsPatchResponse extends SpeakeasyBase {
    ad?: shared.Ad;
    contentType: string;
    statusCode: number;
}
