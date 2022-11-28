import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BooksVolumesAssociatedListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=volumeId" })
  volumeId: string;
}

export enum BooksVolumesAssociatedListAssociationEnum {
    AssociationUndefined = "ASSOCIATION_UNDEFINED",
    EndOfSample = "end-of-sample",
    EndOfVolume = "end-of-volume",
    RelatedForPlay = "related-for-play"
}

export enum BooksVolumesAssociatedListMaxAllowedMaturityRatingEnum {
    MaxAllowedMaturityRatingUndefined = "MAX_ALLOWED_MATURITY_RATING_UNDEFINED",
    Mature = "MATURE",
    NotMature = "not-mature"
}


export class BooksVolumesAssociatedListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=association" })
  association?: BooksVolumesAssociatedListAssociationEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAllowedMaturityRating" })
  maxAllowedMaturityRating?: BooksVolumesAssociatedListMaxAllowedMaturityRatingEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class BooksVolumesAssociatedListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BooksVolumesAssociatedListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BooksVolumesAssociatedListPathParams;

  @SpeakeasyMetadata()
  queryParams: BooksVolumesAssociatedListQueryParams;

  @SpeakeasyMetadata()
  security: BooksVolumesAssociatedListSecurity;
}


export class BooksVolumesAssociatedListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  volumes?: shared.Volumes;
}
