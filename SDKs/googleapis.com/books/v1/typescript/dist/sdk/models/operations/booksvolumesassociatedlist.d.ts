import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksVolumesAssociatedListPathParams extends SpeakeasyBase {
    volumeId: string;
}
export declare enum BooksVolumesAssociatedListAssociationEnum {
    AssociationUndefined = "ASSOCIATION_UNDEFINED",
    EndOfSample = "end-of-sample",
    EndOfVolume = "end-of-volume",
    RelatedForPlay = "related-for-play"
}
export declare enum BooksVolumesAssociatedListMaxAllowedMaturityRatingEnum {
    MaxAllowedMaturityRatingUndefined = "MAX_ALLOWED_MATURITY_RATING_UNDEFINED",
    Mature = "MATURE",
    NotMature = "not-mature"
}
export declare class BooksVolumesAssociatedListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    association?: BooksVolumesAssociatedListAssociationEnum;
    callback?: string;
    fields?: string;
    key?: string;
    locale?: string;
    maxAllowedMaturityRating?: BooksVolumesAssociatedListMaxAllowedMaturityRatingEnum;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    source?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BooksVolumesAssociatedListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksVolumesAssociatedListRequest extends SpeakeasyBase {
    pathParams: BooksVolumesAssociatedListPathParams;
    queryParams: BooksVolumesAssociatedListQueryParams;
    security: BooksVolumesAssociatedListSecurity;
}
export declare class BooksVolumesAssociatedListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    volumes?: shared.Volumes;
}
