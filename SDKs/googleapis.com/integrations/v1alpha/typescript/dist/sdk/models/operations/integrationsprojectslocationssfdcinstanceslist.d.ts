import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsSfdcInstancesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IntegrationsProjectsLocationsSfdcInstancesListQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsProjectsLocationsSfdcInstancesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsSfdcInstancesListRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsSfdcInstancesListPathParams;
    queryParams: IntegrationsProjectsLocationsSfdcInstancesListQueryParams;
    security: IntegrationsProjectsLocationsSfdcInstancesListSecurity;
}
export declare class IntegrationsProjectsLocationsSfdcInstancesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaListSfdcInstancesResponse?: shared.GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse;
    statusCode: number;
}
