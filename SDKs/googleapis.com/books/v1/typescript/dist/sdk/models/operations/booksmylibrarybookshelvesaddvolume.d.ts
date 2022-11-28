import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksMylibraryBookshelvesAddVolumePathParams extends SpeakeasyBase {
    shelf: string;
}
export declare enum BooksMylibraryBookshelvesAddVolumeReasonEnum {
    ReasonUndefined = "REASON_UNDEFINED",
    IosPrex = "IOS_PREX",
    IosSearch = "IOS_SEARCH",
    Onboarding = "ONBOARDING"
}
export declare class BooksMylibraryBookshelvesAddVolumeQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    reason?: BooksMylibraryBookshelvesAddVolumeReasonEnum;
    source?: string;
    uploadType?: string;
    uploadProtocol?: string;
    volumeId: string;
}
export declare class BooksMylibraryBookshelvesAddVolumeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksMylibraryBookshelvesAddVolumeRequest extends SpeakeasyBase {
    pathParams: BooksMylibraryBookshelvesAddVolumePathParams;
    queryParams: BooksMylibraryBookshelvesAddVolumeQueryParams;
    security: BooksMylibraryBookshelvesAddVolumeSecurity;
}
export declare class BooksMylibraryBookshelvesAddVolumeResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
