import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SlidesPresentationsPagesGetThumbnailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pageObjectId" })
  pageObjectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=presentationId" })
  presentationId: string;
}

export enum SlidesPresentationsPagesGetThumbnailThumbnailPropertiesMimeTypeEnum {
    Png = "PNG"
}

export enum SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnum {
    ThumbnailSizeUnspecified = "THUMBNAIL_SIZE_UNSPECIFIED"
,    Large = "LARGE"
,    Medium = "MEDIUM"
,    Small = "SMALL"
}


export class SlidesPresentationsPagesGetThumbnailQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=thumbnailProperties.mimeType" })
  thumbnailPropertiesMimeType?: SlidesPresentationsPagesGetThumbnailThumbnailPropertiesMimeTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=thumbnailProperties.thumbnailSize" })
  thumbnailPropertiesThumbnailSize?: SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class SlidesPresentationsPagesGetThumbnailSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SlidesPresentationsPagesGetThumbnailSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SlidesPresentationsPagesGetThumbnailSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SlidesPresentationsPagesGetThumbnailSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SlidesPresentationsPagesGetThumbnailSecurityOption5 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class SlidesPresentationsPagesGetThumbnailSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SlidesPresentationsPagesGetThumbnailSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SlidesPresentationsPagesGetThumbnailSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: SlidesPresentationsPagesGetThumbnailSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: SlidesPresentationsPagesGetThumbnailSecurityOption4;

  @Metadata({ data: "security, option=true" })
  option5?: SlidesPresentationsPagesGetThumbnailSecurityOption5;
}


export class SlidesPresentationsPagesGetThumbnailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SlidesPresentationsPagesGetThumbnailPathParams;

  @Metadata()
  queryParams: SlidesPresentationsPagesGetThumbnailQueryParams;

  @Metadata()
  security: SlidesPresentationsPagesGetThumbnailSecurity;
}


export class SlidesPresentationsPagesGetThumbnailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  thumbnail?: shared.Thumbnail;
}
