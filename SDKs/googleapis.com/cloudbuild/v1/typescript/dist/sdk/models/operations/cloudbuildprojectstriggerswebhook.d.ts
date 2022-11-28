import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsTriggersWebhookPathParams extends SpeakeasyBase {
    projectId: string;
    trigger: string;
}
export declare class CloudbuildProjectsTriggersWebhookQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    name?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    secret?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudbuildProjectsTriggersWebhookRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsTriggersWebhookPathParams;
    queryParams: CloudbuildProjectsTriggersWebhookQueryParams;
    request?: shared.HttpBody;
}
export declare class CloudbuildProjectsTriggersWebhookResponse extends SpeakeasyBase {
    contentType: string;
    receiveTriggerWebhookResponse?: Map<string, any>;
    statusCode: number;
}
