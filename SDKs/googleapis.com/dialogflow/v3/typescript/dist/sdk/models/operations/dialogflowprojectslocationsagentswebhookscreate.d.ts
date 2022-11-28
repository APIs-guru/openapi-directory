import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsWebhooksCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsWebhooksCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsAgentsWebhooksCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsWebhooksCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsWebhooksCreateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsWebhooksCreateSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsWebhooksCreateSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsWebhooksCreateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsWebhooksCreatePathParams;
    queryParams: DialogflowProjectsLocationsAgentsWebhooksCreateQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3Webhook;
    security: DialogflowProjectsLocationsAgentsWebhooksCreateSecurity;
}
export declare class DialogflowProjectsLocationsAgentsWebhooksCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3Webhook?: shared.GoogleCloudDialogflowCxV3Webhook;
    statusCode: number;
}
