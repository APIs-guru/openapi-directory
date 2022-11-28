import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingFloodlightConfigurationsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingFloodlightConfigurationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    ids?: string[];
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingFloodlightConfigurationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingFloodlightConfigurationsListRequest extends SpeakeasyBase {
    pathParams: DfareportingFloodlightConfigurationsListPathParams;
    queryParams: DfareportingFloodlightConfigurationsListQueryParams;
    security: DfareportingFloodlightConfigurationsListSecurity;
}
export declare class DfareportingFloodlightConfigurationsListResponse extends SpeakeasyBase {
    contentType: string;
    floodlightConfigurationsListResponse?: shared.FloodlightConfigurationsListResponse;
    statusCode: number;
}
