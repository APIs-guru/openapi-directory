import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsWebhooksListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsWebhooksListQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsWebhooksListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsWebhooksListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsWebhooksListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsWebhooksListSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsWebhooksListSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsWebhooksListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsWebhooksListPathParams;
    queryParams: DialogflowProjectsLocationsAgentsWebhooksListQueryParams;
    security: DialogflowProjectsLocationsAgentsWebhooksListSecurity;
}
export declare class DialogflowProjectsLocationsAgentsWebhooksListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3ListWebhooksResponse?: shared.GoogleCloudDialogflowCxV3ListWebhooksResponse;
    statusCode: number;
}
