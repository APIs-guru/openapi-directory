import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasedynamiclinksReopenAttributionQueryParams extends SpeakeasyBase {
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
export declare class FirebasedynamiclinksReopenAttributionSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasedynamiclinksReopenAttributionRequest extends SpeakeasyBase {
    queryParams: FirebasedynamiclinksReopenAttributionQueryParams;
    request?: shared.GetIosReopenAttributionRequest;
    security: FirebasedynamiclinksReopenAttributionSecurity;
}
export declare class FirebasedynamiclinksReopenAttributionResponse extends SpeakeasyBase {
    contentType: string;
    getIosReopenAttributionResponse?: shared.GetIosReopenAttributionResponse;
    statusCode: number;
}
