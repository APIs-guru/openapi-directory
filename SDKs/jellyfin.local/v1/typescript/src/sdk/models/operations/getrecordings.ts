import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRecordingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=channelId" })
  channelId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableImageTypes" })
  enableImageTypes?: shared.ImageTypeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableImages" })
  enableImages?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableTotalRecordCount" })
  enableTotalRecordCount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableUserData" })
  enableUserData?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: shared.ItemFieldsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=imageTypeLimit" })
  imageTypeLimit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isInProgress" })
  isInProgress?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isKids" })
  isKids?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isLibraryItem" })
  isLibraryItem?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isMovie" })
  isMovie?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isNews" })
  isNews?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isSeries" })
  isSeries?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isSports" })
  isSports?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=seriesTimerId" })
  seriesTimerId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: shared.RecordingStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetRecordingsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetRecordingsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRecordingsQueryParams;

  @Metadata()
  security: GetRecordingsSecurity;
}


export class GetRecordingsResponse extends SpeakeasyBase {
  @Metadata()
  baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
