import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentLocalinventoryCustombatchQueryParams extends SpeakeasyBase {
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
export declare class ContentLocalinventoryCustombatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentLocalinventoryCustombatchRequest extends SpeakeasyBase {
    queryParams: ContentLocalinventoryCustombatchQueryParams;
    request?: shared.LocalinventoryCustomBatchRequest;
    security: ContentLocalinventoryCustombatchSecurity;
}
export declare class ContentLocalinventoryCustombatchResponse extends SpeakeasyBase {
    contentType: string;
    localinventoryCustomBatchResponse?: shared.LocalinventoryCustomBatchResponse;
    statusCode: number;
}
