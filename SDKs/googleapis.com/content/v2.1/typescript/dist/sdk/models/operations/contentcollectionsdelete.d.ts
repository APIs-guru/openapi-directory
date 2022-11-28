import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentCollectionsDeletePathParams extends SpeakeasyBase {
    collectionId: string;
    merchantId: string;
}
export declare class ContentCollectionsDeleteQueryParams extends SpeakeasyBase {
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
export declare class ContentCollectionsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentCollectionsDeleteRequest extends SpeakeasyBase {
    pathParams: ContentCollectionsDeletePathParams;
    queryParams: ContentCollectionsDeleteQueryParams;
    security: ContentCollectionsDeleteSecurity;
}
export declare class ContentCollectionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
