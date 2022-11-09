import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PlayintegrityDecodeIntegrityTokenPathParams extends SpeakeasyBase {
    packageName: string;
}
export declare class PlayintegrityDecodeIntegrityTokenQueryParams extends SpeakeasyBase {
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
export declare class PlayintegrityDecodeIntegrityTokenSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PlayintegrityDecodeIntegrityTokenRequest extends SpeakeasyBase {
    pathParams: PlayintegrityDecodeIntegrityTokenPathParams;
    queryParams: PlayintegrityDecodeIntegrityTokenQueryParams;
    request?: shared.DecodeIntegrityTokenRequest;
    security: PlayintegrityDecodeIntegrityTokenSecurity;
}
export declare class PlayintegrityDecodeIntegrityTokenResponse extends SpeakeasyBase {
    contentType: string;
    decodeIntegrityTokenResponse?: shared.DecodeIntegrityTokenResponse;
    statusCode: number;
}
