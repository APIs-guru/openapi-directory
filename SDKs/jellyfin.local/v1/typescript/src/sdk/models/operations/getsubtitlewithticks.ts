import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSubtitleWithTicksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mediaSourceId" })
  mediaSourceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=startPositionTicks" })
  startPositionTicks: number;
}


export class GetSubtitleWithTicksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=addVttTimeMap" })
  addVttTimeMap?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=copyTimestamps" })
  copyTimestamps?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endPositionTicks" })
  endPositionTicks?: number;
}


export class GetSubtitleWithTicksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubtitleWithTicksPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSubtitleWithTicksQueryParams;
}


export class GetSubtitleWithTicksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSubtitleWithTicks200TextWildcardBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
