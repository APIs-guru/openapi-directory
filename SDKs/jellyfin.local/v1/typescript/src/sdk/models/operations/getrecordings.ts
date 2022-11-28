import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRecordingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImageTypes" })
  enableImageTypes?: shared.ImageTypeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImages" })
  enableImages?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableTotalRecordCount" })
  enableTotalRecordCount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableUserData" })
  enableUserData?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: shared.ItemFieldsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageTypeLimit" })
  imageTypeLimit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isInProgress" })
  isInProgress?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isKids" })
  isKids?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isLibraryItem" })
  isLibraryItem?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isMovie" })
  isMovie?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isNews" })
  isNews?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isSeries" })
  isSeries?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isSports" })
  isSports?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seriesTimerId" })
  seriesTimerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: shared.RecordingStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetRecordingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetRecordingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRecordingsQueryParams;

  @SpeakeasyMetadata()
  security: GetRecordingsSecurity;
}


export class GetRecordingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
