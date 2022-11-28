import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasedynamiclinksInstallAttributionQueryParams extends SpeakeasyBase {
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
export declare class FirebasedynamiclinksInstallAttributionSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasedynamiclinksInstallAttributionRequest extends SpeakeasyBase {
    queryParams: FirebasedynamiclinksInstallAttributionQueryParams;
    request?: shared.GetIosPostInstallAttributionRequest;
    security: FirebasedynamiclinksInstallAttributionSecurity;
}
export declare class FirebasedynamiclinksInstallAttributionResponse extends SpeakeasyBase {
    contentType: string;
    getIosPostInstallAttributionResponse?: shared.GetIosPostInstallAttributionResponse;
    statusCode: number;
}
