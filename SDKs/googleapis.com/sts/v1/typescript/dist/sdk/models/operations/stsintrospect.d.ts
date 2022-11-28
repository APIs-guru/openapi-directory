import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StsIntrospectQueryParams extends SpeakeasyBase {
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
export declare class StsIntrospectRequest extends SpeakeasyBase {
    queryParams: StsIntrospectQueryParams;
    request?: shared.GoogleIdentityStsV1IntrospectTokenRequest;
}
export declare class StsIntrospectResponse extends SpeakeasyBase {
    contentType: string;
    googleIdentityStsV1IntrospectTokenResponse?: shared.GoogleIdentityStsV1IntrospectTokenResponse;
    statusCode: number;
}
