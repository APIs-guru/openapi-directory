import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingRegionsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingRegionsListQueryParams extends SpeakeasyBase {
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
export declare class DfareportingRegionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingRegionsListRequest extends SpeakeasyBase {
    pathParams: DfareportingRegionsListPathParams;
    queryParams: DfareportingRegionsListQueryParams;
    security: DfareportingRegionsListSecurity;
}
export declare class DfareportingRegionsListResponse extends SpeakeasyBase {
    contentType: string;
    regionsListResponse?: shared.RegionsListResponse;
    statusCode: number;
}
