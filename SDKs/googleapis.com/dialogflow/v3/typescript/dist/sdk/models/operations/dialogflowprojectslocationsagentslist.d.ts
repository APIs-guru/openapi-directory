import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsListQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsListSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsListSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsListPathParams;
    queryParams: DialogflowProjectsLocationsAgentsListQueryParams;
    security: DialogflowProjectsLocationsAgentsListSecurity;
}
export declare class DialogflowProjectsLocationsAgentsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3ListAgentsResponse?: shared.GoogleCloudDialogflowCxV3ListAgentsResponse;
    statusCode: number;
}
