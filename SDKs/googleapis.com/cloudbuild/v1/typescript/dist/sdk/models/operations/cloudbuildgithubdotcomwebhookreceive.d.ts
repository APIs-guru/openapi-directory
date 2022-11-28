import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildGithubDotComWebhookReceiveQueryParams extends SpeakeasyBase {
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
    webhookKey?: string;
}
export declare class CloudbuildGithubDotComWebhookReceiveRequest extends SpeakeasyBase {
    queryParams: CloudbuildGithubDotComWebhookReceiveQueryParams;
    request?: shared.HttpBody;
}
export declare class CloudbuildGithubDotComWebhookReceiveResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
