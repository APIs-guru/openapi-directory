import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingOperatingSystemVersionsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingOperatingSystemVersionsListQueryParams extends SpeakeasyBase {
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
export declare class DfareportingOperatingSystemVersionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingOperatingSystemVersionsListRequest extends SpeakeasyBase {
    pathParams: DfareportingOperatingSystemVersionsListPathParams;
    queryParams: DfareportingOperatingSystemVersionsListQueryParams;
    security: DfareportingOperatingSystemVersionsListSecurity;
}
export declare class DfareportingOperatingSystemVersionsListResponse extends SpeakeasyBase {
    contentType: string;
    operatingSystemVersionsListResponse?: shared.OperatingSystemVersionsListResponse;
    statusCode: number;
}
