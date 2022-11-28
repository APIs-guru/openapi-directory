import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsEnvironmentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsListQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsEnvironmentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsEnvironmentsListSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsEnvironmentsListSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsEnvironmentsListPathParams;
    queryParams: DialogflowProjectsLocationsAgentsEnvironmentsListQueryParams;
    security: DialogflowProjectsLocationsAgentsEnvironmentsListSecurity;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3beta1ListEnvironmentsResponse?: shared.GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse;
    statusCode: number;
}
