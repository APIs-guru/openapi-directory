import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BooksMyconfigSyncVolumeLicensesFeaturesEnum {
    FeaturesUndefined = "FEATURES_UNDEFINED",
    Rentals = "RENTALS"
}
export declare class BooksMyconfigSyncVolumeLicensesQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    cpksver: string;
    features?: BooksMyconfigSyncVolumeLicensesFeaturesEnum[];
    fields?: string;
    includeNonComicsSeries?: boolean;
    key?: string;
    locale?: string;
    nonce: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    showPreorders?: boolean;
    source: string;
    uploadType?: string;
    uploadProtocol?: string;
    volumeIds?: string[];
}
export declare class BooksMyconfigSyncVolumeLicensesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksMyconfigSyncVolumeLicensesRequest extends SpeakeasyBase {
    queryParams: BooksMyconfigSyncVolumeLicensesQueryParams;
    security: BooksMyconfigSyncVolumeLicensesSecurity;
}
export declare class BooksMyconfigSyncVolumeLicensesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    volumes?: shared.Volumes;
}
