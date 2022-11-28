import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksMylibraryBookshelvesRemoveVolumePathParams extends SpeakeasyBase {
    shelf: string;
}
export declare enum BooksMylibraryBookshelvesRemoveVolumeReasonEnum {
    ReasonUndefined = "REASON_UNDEFINED",
    Onboarding = "ONBOARDING"
}
export declare class BooksMylibraryBookshelvesRemoveVolumeQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    reason?: BooksMylibraryBookshelvesRemoveVolumeReasonEnum;
    source?: string;
    uploadType?: string;
    uploadProtocol?: string;
    volumeId: string;
}
export declare class BooksMylibraryBookshelvesRemoveVolumeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksMylibraryBookshelvesRemoveVolumeRequest extends SpeakeasyBase {
    pathParams: BooksMylibraryBookshelvesRemoveVolumePathParams;
    queryParams: BooksMylibraryBookshelvesRemoveVolumeQueryParams;
    security: BooksMylibraryBookshelvesRemoveVolumeSecurity;
}
export declare class BooksMylibraryBookshelvesRemoveVolumeResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
