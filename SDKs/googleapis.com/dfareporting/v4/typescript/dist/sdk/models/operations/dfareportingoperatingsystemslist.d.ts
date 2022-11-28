import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingOperatingSystemsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingOperatingSystemsListQueryParams extends SpeakeasyBase {
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
export declare class DfareportingOperatingSystemsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingOperatingSystemsListRequest extends SpeakeasyBase {
    pathParams: DfareportingOperatingSystemsListPathParams;
    queryParams: DfareportingOperatingSystemsListQueryParams;
    security: DfareportingOperatingSystemsListSecurity;
}
export declare class DfareportingOperatingSystemsListResponse extends SpeakeasyBase {
    contentType: string;
    operatingSystemsListResponse?: shared.OperatingSystemsListResponse;
    statusCode: number;
}
