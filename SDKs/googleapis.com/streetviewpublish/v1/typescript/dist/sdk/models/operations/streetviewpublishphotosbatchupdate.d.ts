import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StreetviewpublishPhotosBatchUpdateQueryParams extends SpeakeasyBase {
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
export declare class StreetviewpublishPhotosBatchUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StreetviewpublishPhotosBatchUpdateRequest extends SpeakeasyBase {
    queryParams: StreetviewpublishPhotosBatchUpdateQueryParams;
    request?: shared.BatchUpdatePhotosRequestInput;
    security: StreetviewpublishPhotosBatchUpdateSecurity;
}
export declare class StreetviewpublishPhotosBatchUpdateResponse extends SpeakeasyBase {
    batchUpdatePhotosResponse?: shared.BatchUpdatePhotosResponse;
    contentType: string;
    statusCode: number;
}
