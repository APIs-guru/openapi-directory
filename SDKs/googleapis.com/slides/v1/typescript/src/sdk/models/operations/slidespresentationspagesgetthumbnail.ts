import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SlidesPresentationsPagesGetThumbnailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pageObjectId" })
  pageObjectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=presentationId" })
  presentationId: string;
}

export enum SlidesPresentationsPagesGetThumbnailThumbnailPropertiesMimeTypeEnum {
    Png = "PNG"
}

export enum SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnum {
    ThumbnailSizeUnspecified = "THUMBNAIL_SIZE_UNSPECIFIED",
    Large = "LARGE",
    Medium = "MEDIUM",
    Small = "SMALL"
}


export class SlidesPresentationsPagesGetThumbnailQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=thumbnailProperties.mimeType" })
  thumbnailPropertiesMimeType?: SlidesPresentationsPagesGetThumbnailThumbnailPropertiesMimeTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=thumbnailProperties.thumbnailSize" })
  thumbnailPropertiesThumbnailSize?: SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class SlidesPresentationsPagesGetThumbnailSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SlidesPresentationsPagesGetThumbnailSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SlidesPresentationsPagesGetThumbnailSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SlidesPresentationsPagesGetThumbnailSecurityOption4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SlidesPresentationsPagesGetThumbnailSecurityOption5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SlidesPresentationsPagesGetThumbnailSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: SlidesPresentationsPagesGetThumbnailSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: SlidesPresentationsPagesGetThumbnailSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: SlidesPresentationsPagesGetThumbnailSecurityOption3;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option4?: SlidesPresentationsPagesGetThumbnailSecurityOption4;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option5?: SlidesPresentationsPagesGetThumbnailSecurityOption5;
}


export class SlidesPresentationsPagesGetThumbnailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SlidesPresentationsPagesGetThumbnailPathParams;

  @SpeakeasyMetadata()
  queryParams: SlidesPresentationsPagesGetThumbnailQueryParams;

  @SpeakeasyMetadata()
  security: SlidesPresentationsPagesGetThumbnailSecurity;
}


export class SlidesPresentationsPagesGetThumbnailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  thumbnail?: shared.Thumbnail;
}
