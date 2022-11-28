import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCreativesUpdatePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingCreativesUpdateQueryParams extends SpeakeasyBase {
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
export declare class DfareportingCreativesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCreativesUpdateRequest extends SpeakeasyBase {
    pathParams: DfareportingCreativesUpdatePathParams;
    queryParams: DfareportingCreativesUpdateQueryParams;
    request?: shared.Creative;
    security: DfareportingCreativesUpdateSecurity;
}
export declare class DfareportingCreativesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    creative?: shared.Creative;
    statusCode: number;
}
