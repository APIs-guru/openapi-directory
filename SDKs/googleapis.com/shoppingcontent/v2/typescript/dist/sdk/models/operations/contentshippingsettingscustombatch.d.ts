import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentShippingsettingsCustombatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dryRun?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentShippingsettingsCustombatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentShippingsettingsCustombatchRequest extends SpeakeasyBase {
    queryParams: ContentShippingsettingsCustombatchQueryParams;
    request?: shared.ShippingsettingsCustomBatchRequest;
    security: ContentShippingsettingsCustombatchSecurity;
}
export declare class ContentShippingsettingsCustombatchResponse extends SpeakeasyBase {
    contentType: string;
    shippingsettingsCustomBatchResponse?: shared.ShippingsettingsCustomBatchResponse;
    statusCode: number;
}
