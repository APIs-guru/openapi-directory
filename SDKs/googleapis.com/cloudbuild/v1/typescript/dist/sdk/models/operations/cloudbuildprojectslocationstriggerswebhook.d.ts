import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsLocationsTriggersWebhookPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudbuildProjectsLocationsTriggersWebhookQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projectId?: string;
    quotaUser?: string;
    secret?: string;
    trigger?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudbuildProjectsLocationsTriggersWebhookRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsLocationsTriggersWebhookPathParams;
    queryParams: CloudbuildProjectsLocationsTriggersWebhookQueryParams;
    request?: shared.HttpBody;
}
export declare class CloudbuildProjectsLocationsTriggersWebhookResponse extends SpeakeasyBase {
    contentType: string;
    receiveTriggerWebhookResponse?: Map<string, any>;
    statusCode: number;
}
