import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingOperatingSystemsGetPathParams extends SpeakeasyBase {
    dartId: string;
    profileId: string;
}
export declare class DfareportingOperatingSystemsGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingOperatingSystemsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingOperatingSystemsGetRequest extends SpeakeasyBase {
    pathParams: DfareportingOperatingSystemsGetPathParams;
    queryParams: DfareportingOperatingSystemsGetQueryParams;
    security: DfareportingOperatingSystemsGetSecurity;
}
export declare class DfareportingOperatingSystemsGetResponse extends SpeakeasyBase {
    contentType: string;
    operatingSystem?: shared.OperatingSystem;
    statusCode: number;
}
