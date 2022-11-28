import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListPathParams;
    queryParams: DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListQueryParams;
    security: DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListSecurity;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3ListExperimentsResponse?: shared.GoogleCloudDialogflowCxV3ListExperimentsResponse;
    statusCode: number;
}
