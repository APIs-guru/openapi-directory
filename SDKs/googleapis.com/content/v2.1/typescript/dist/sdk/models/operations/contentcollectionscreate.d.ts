import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentCollectionsCreatePathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentCollectionsCreateQueryParams extends SpeakeasyBase {
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
export declare class ContentCollectionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentCollectionsCreateRequest extends SpeakeasyBase {
    pathParams: ContentCollectionsCreatePathParams;
    queryParams: ContentCollectionsCreateQueryParams;
    request?: shared.Collection;
    security: ContentCollectionsCreateSecurity;
}
export declare class ContentCollectionsCreateResponse extends SpeakeasyBase {
    collection?: shared.Collection;
    contentType: string;
    statusCode: number;
}
