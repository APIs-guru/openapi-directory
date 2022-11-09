import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StreetviewpublishPhotoGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=photoId" })
  photoId: string;
}

export enum StreetviewpublishPhotoGetViewEnum {
    Basic = "BASIC"
,    IncludeDownloadUrl = "INCLUDE_DOWNLOAD_URL"
}


export class StreetviewpublishPhotoGetQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: StreetviewpublishPhotoGetViewEnum;
}


export class StreetviewpublishPhotoGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StreetviewpublishPhotoGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StreetviewpublishPhotoGetPathParams;

  @Metadata()
  queryParams: StreetviewpublishPhotoGetQueryParams;

  @Metadata()
  security: StreetviewpublishPhotoGetSecurity;
}


export class StreetviewpublishPhotoGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  photo?: shared.Photo;

  @Metadata()
  statusCode: number;
}
