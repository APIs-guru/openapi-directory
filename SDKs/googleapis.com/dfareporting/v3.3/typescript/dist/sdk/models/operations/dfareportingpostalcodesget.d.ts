import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingPostalCodesGetPathParams extends SpeakeasyBase {
    code: string;
    profileId: string;
}
export declare class DfareportingPostalCodesGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingPostalCodesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingPostalCodesGetRequest extends SpeakeasyBase {
    pathParams: DfareportingPostalCodesGetPathParams;
    queryParams: DfareportingPostalCodesGetQueryParams;
    security: DfareportingPostalCodesGetSecurity;
}
export declare class DfareportingPostalCodesGetResponse extends SpeakeasyBase {
    contentType: string;
    postalCode?: shared.PostalCode;
    statusCode: number;
}
