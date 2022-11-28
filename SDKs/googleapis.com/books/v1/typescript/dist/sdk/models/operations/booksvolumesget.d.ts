import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksVolumesGetPathParams extends SpeakeasyBase {
    volumeId: string;
}
export declare enum BooksVolumesGetProjectionEnum {
    ProjectionUndefined = "PROJECTION_UNDEFINED",
    Full = "FULL",
    Lite = "LITE"
}
export declare class BooksVolumesGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    country?: string;
    fields?: string;
    includeNonComicsSeries?: boolean;
    key?: string;
    oauthToken?: string;
    partner?: string;
    prettyPrint?: boolean;
    projection?: BooksVolumesGetProjectionEnum;
    quotaUser?: string;
    source?: string;
    uploadType?: string;
    uploadProtocol?: string;
    userLibraryConsistentRead?: boolean;
}
export declare class BooksVolumesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksVolumesGetRequest extends SpeakeasyBase {
    pathParams: BooksVolumesGetPathParams;
    queryParams: BooksVolumesGetQueryParams;
    security: BooksVolumesGetSecurity;
}
export declare class BooksVolumesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    volume?: shared.Volume;
}
