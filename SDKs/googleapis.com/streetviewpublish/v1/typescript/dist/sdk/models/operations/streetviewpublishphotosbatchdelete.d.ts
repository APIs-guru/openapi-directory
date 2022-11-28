import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StreetviewpublishPhotosBatchDeleteQueryParams extends SpeakeasyBase {
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
export declare class StreetviewpublishPhotosBatchDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StreetviewpublishPhotosBatchDeleteRequest extends SpeakeasyBase {
    queryParams: StreetviewpublishPhotosBatchDeleteQueryParams;
    request?: shared.BatchDeletePhotosRequest;
    security: StreetviewpublishPhotosBatchDeleteSecurity;
}
export declare class StreetviewpublishPhotosBatchDeleteResponse extends SpeakeasyBase {
    batchDeletePhotosResponse?: shared.BatchDeletePhotosResponse;
    contentType: string;
    statusCode: number;
}
