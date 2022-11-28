import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListPathParams;
    queryParams: DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListQueryParams;
    security: DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListSecurity;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3ListDeploymentsResponse?: shared.GoogleCloudDialogflowCxV3ListDeploymentsResponse;
    statusCode: number;
}
