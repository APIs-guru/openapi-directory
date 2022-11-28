import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingMobileCarriersGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingMobileCarriersGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingMobileCarriersGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingMobileCarriersGetRequest extends SpeakeasyBase {
    pathParams: DfareportingMobileCarriersGetPathParams;
    queryParams: DfareportingMobileCarriersGetQueryParams;
    security: DfareportingMobileCarriersGetSecurity;
}
export declare class DfareportingMobileCarriersGetResponse extends SpeakeasyBase {
    contentType: string;
    mobileCarrier?: shared.MobileCarrier;
    statusCode: number;
}
