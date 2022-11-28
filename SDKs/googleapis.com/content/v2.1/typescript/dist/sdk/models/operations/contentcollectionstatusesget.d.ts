import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentCollectionstatusesGetPathParams extends SpeakeasyBase {
    collectionId: string;
    merchantId: string;
}
export declare class ContentCollectionstatusesGetQueryParams extends SpeakeasyBase {
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
export declare class ContentCollectionstatusesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentCollectionstatusesGetRequest extends SpeakeasyBase {
    pathParams: ContentCollectionstatusesGetPathParams;
    queryParams: ContentCollectionstatusesGetQueryParams;
    security: ContentCollectionstatusesGetSecurity;
}
export declare class ContentCollectionstatusesGetResponse extends SpeakeasyBase {
    collectionStatus?: shared.CollectionStatus;
    contentType: string;
    statusCode: number;
}
