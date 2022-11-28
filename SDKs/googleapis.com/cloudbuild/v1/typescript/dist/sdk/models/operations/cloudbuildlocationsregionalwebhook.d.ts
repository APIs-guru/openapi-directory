import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildLocationsRegionalWebhookPathParams extends SpeakeasyBase {
    location: string;
}
export declare class CloudbuildLocationsRegionalWebhookQueryParams extends SpeakeasyBase {
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
export declare class CloudbuildLocationsRegionalWebhookRequest extends SpeakeasyBase {
    pathParams: CloudbuildLocationsRegionalWebhookPathParams;
    queryParams: CloudbuildLocationsRegionalWebhookQueryParams;
    request?: shared.HttpBody;
}
export declare class CloudbuildLocationsRegionalWebhookResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
