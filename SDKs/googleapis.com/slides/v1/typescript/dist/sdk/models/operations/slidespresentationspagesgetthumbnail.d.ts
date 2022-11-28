import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SlidesPresentationsPagesGetThumbnailPathParams extends SpeakeasyBase {
    pageObjectId: string;
    presentationId: string;
}
export declare enum SlidesPresentationsPagesGetThumbnailThumbnailPropertiesMimeTypeEnum {
    Png = "PNG"
}
export declare enum SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnum {
    ThumbnailSizeUnspecified = "THUMBNAIL_SIZE_UNSPECIFIED",
    Large = "LARGE",
    Medium = "MEDIUM",
    Small = "SMALL"
}
export declare class SlidesPresentationsPagesGetThumbnailQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    thumbnailPropertiesMimeType?: SlidesPresentationsPagesGetThumbnailThumbnailPropertiesMimeTypeEnum;
    thumbnailPropertiesThumbnailSize?: SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SlidesPresentationsPagesGetThumbnailSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SlidesPresentationsPagesGetThumbnailSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SlidesPresentationsPagesGetThumbnailSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SlidesPresentationsPagesGetThumbnailSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SlidesPresentationsPagesGetThumbnailSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SlidesPresentationsPagesGetThumbnailSecurity extends SpeakeasyBase {
    option1?: SlidesPresentationsPagesGetThumbnailSecurityOption1;
    option2?: SlidesPresentationsPagesGetThumbnailSecurityOption2;
    option3?: SlidesPresentationsPagesGetThumbnailSecurityOption3;
    option4?: SlidesPresentationsPagesGetThumbnailSecurityOption4;
    option5?: SlidesPresentationsPagesGetThumbnailSecurityOption5;
}
export declare class SlidesPresentationsPagesGetThumbnailRequest extends SpeakeasyBase {
    pathParams: SlidesPresentationsPagesGetThumbnailPathParams;
    queryParams: SlidesPresentationsPagesGetThumbnailQueryParams;
    security: SlidesPresentationsPagesGetThumbnailSecurity;
}
export declare class SlidesPresentationsPagesGetThumbnailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    thumbnail?: shared.Thumbnail;
}
