import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentEnvironmentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentEnvironmentsListQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentEnvironmentsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentEnvironmentsListSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentEnvironmentsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentEnvironmentsListPathParams;
    queryParams: DialogflowProjectsLocationsAgentEnvironmentsListQueryParams;
    security: DialogflowProjectsLocationsAgentEnvironmentsListSecurity;
}
export declare class DialogflowProjectsLocationsAgentEnvironmentsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2beta1ListEnvironmentsResponse?: shared.GoogleCloudDialogflowV2beta1ListEnvironmentsResponse;
    statusCode: number;
}
