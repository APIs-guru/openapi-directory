import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StreetviewpublishPhotoSequenceDeletePathParams extends SpeakeasyBase {
    sequenceId: string;
}
export declare class StreetviewpublishPhotoSequenceDeleteQueryParams extends SpeakeasyBase {
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
export declare class StreetviewpublishPhotoSequenceDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class StreetviewpublishPhotoSequenceDeleteRequest extends SpeakeasyBase {
    pathParams: StreetviewpublishPhotoSequenceDeletePathParams;
    queryParams: StreetviewpublishPhotoSequenceDeleteQueryParams;
    security: StreetviewpublishPhotoSequenceDeleteSecurity;
}
export declare class StreetviewpublishPhotoSequenceDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
