import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BooksMyconfigRequestAccessLicenseTypesEnum {
    LicenseTypesUndefined = "LICENSE_TYPES_UNDEFINED",
    Both = "BOTH",
    Concurrent = "CONCURRENT",
    Download = "DOWNLOAD"
}
export declare class BooksMyconfigRequestAccessQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    cpksver: string;
    fields?: string;
    key?: string;
    licenseTypes?: BooksMyconfigRequestAccessLicenseTypesEnum;
    locale?: string;
    nonce: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    source: string;
    uploadType?: string;
    uploadProtocol?: string;
    volumeId: string;
}
export declare class BooksMyconfigRequestAccessSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksMyconfigRequestAccessRequest extends SpeakeasyBase {
    queryParams: BooksMyconfigRequestAccessQueryParams;
    security: BooksMyconfigRequestAccessSecurity;
}
export declare class BooksMyconfigRequestAccessResponse extends SpeakeasyBase {
    contentType: string;
    requestAccessData?: shared.RequestAccessData;
    statusCode: number;
}
