import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingPlatformTypesListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingPlatformTypesListQueryParams extends SpeakeasyBase {
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
export declare class DfareportingPlatformTypesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingPlatformTypesListRequest extends SpeakeasyBase {
    pathParams: DfareportingPlatformTypesListPathParams;
    queryParams: DfareportingPlatformTypesListQueryParams;
    security: DfareportingPlatformTypesListSecurity;
}
export declare class DfareportingPlatformTypesListResponse extends SpeakeasyBase {
    contentType: string;
    platformTypesListResponse?: shared.PlatformTypesListResponse;
    statusCode: number;
}
