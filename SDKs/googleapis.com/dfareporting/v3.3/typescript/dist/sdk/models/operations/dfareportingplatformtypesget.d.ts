import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingPlatformTypesGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingPlatformTypesGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingPlatformTypesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingPlatformTypesGetRequest extends SpeakeasyBase {
    pathParams: DfareportingPlatformTypesGetPathParams;
    queryParams: DfareportingPlatformTypesGetQueryParams;
    security: DfareportingPlatformTypesGetSecurity;
}
export declare class DfareportingPlatformTypesGetResponse extends SpeakeasyBase {
    contentType: string;
    platformType?: shared.PlatformType;
    statusCode: number;
}
