import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebasedynamiclinksShortLinksCreateQueryParams extends SpeakeasyBase {
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
export declare class FirebasedynamiclinksShortLinksCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasedynamiclinksShortLinksCreateRequest extends SpeakeasyBase {
    queryParams: FirebasedynamiclinksShortLinksCreateQueryParams;
    request?: shared.CreateShortDynamicLinkRequest;
    security: FirebasedynamiclinksShortLinksCreateSecurity;
}
export declare class FirebasedynamiclinksShortLinksCreateResponse extends SpeakeasyBase {
    contentType: string;
    createShortDynamicLinkResponse?: shared.CreateShortDynamicLinkResponse;
    statusCode: number;
}
