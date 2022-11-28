import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingOperatingSystemVersionsGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingOperatingSystemVersionsGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingOperatingSystemVersionsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingOperatingSystemVersionsGetRequest extends SpeakeasyBase {
    pathParams: DfareportingOperatingSystemVersionsGetPathParams;
    queryParams: DfareportingOperatingSystemVersionsGetQueryParams;
    security: DfareportingOperatingSystemVersionsGetSecurity;
}
export declare class DfareportingOperatingSystemVersionsGetResponse extends SpeakeasyBase {
    contentType: string;
    operatingSystemVersion?: shared.OperatingSystemVersion;
    statusCode: number;
}
