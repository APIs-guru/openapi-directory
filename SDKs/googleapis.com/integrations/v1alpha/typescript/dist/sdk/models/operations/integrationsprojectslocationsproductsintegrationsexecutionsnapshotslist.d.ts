import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListPathParams;
    queryParams: IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListQueryParams;
    security: IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListSecurity;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaListExecutionSnapshotsResponse?: shared.GoogleCloudIntegrationsV1alphaListExecutionSnapshotsResponse;
    statusCode: number;
}
