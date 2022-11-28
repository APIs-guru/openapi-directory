import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    filterParamsCustomFilter?: string;
    filterParamsEndTime?: string;
    filterParamsEventStatuses?: string[];
    filterParamsExecutionId?: string;
    filterParamsParameterKey?: string;
    filterParamsParameterPairKey?: string;
    filterParamsParameterPairValue?: string;
    filterParamsParameterType?: string;
    filterParamsParameterValue?: string;
    filterParamsStartTime?: string;
    filterParamsTaskStatuses?: string[];
    filterParamsWorkflowName?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readMask?: string;
    refreshAcl?: boolean;
    truncateParams?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsProductsIntegrationsExecutionsListPathParams;
    queryParams: IntegrationsProjectsLocationsProductsIntegrationsExecutionsListQueryParams;
    security: IntegrationsProjectsLocationsProductsIntegrationsExecutionsListSecurity;
}
export declare class IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaListExecutionsResponse?: shared.GoogleCloudIntegrationsV1alphaListExecutionsResponse;
    statusCode: number;
}
