import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum BooksVolumesMybooksListAcquireMethodEnum {
    AcquireMethodUndefined = "ACQUIRE_METHOD_UNDEFINED",
    FamilyShared = "FAMILY_SHARED",
    Preordered = "PREORDERED",
    PreviouslyRented = "PREVIOUSLY_RENTED",
    PublicDomain = "PUBLIC_DOMAIN",
    Purchased = "PURCHASED",
    Rented = "RENTED",
    Sample = "SAMPLE",
    Uploaded = "UPLOADED"
}

export enum BooksVolumesMybooksListProcessingStateEnum {
    ProcessingStateUndefined = "PROCESSING_STATE_UNDEFINED",
    CompletedFailed = "COMPLETED_FAILED",
    CompletedSuccess = "COMPLETED_SUCCESS",
    Running = "RUNNING"
}


export class BooksVolumesMybooksListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=acquireMethod" })
  acquireMethod?: BooksVolumesMybooksListAcquireMethodEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=processingState" })
  processingState?: BooksVolumesMybooksListProcessingStateEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class BooksVolumesMybooksListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BooksVolumesMybooksListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: BooksVolumesMybooksListQueryParams;

  @SpeakeasyMetadata()
  security: BooksVolumesMybooksListSecurity;
}


export class BooksVolumesMybooksListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  volumes?: shared.Volumes;
}
