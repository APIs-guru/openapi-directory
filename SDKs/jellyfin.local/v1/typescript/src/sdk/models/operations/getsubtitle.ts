import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSubtitlePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mediaSourceId" })
  mediaSourceId: string;
}


export class GetSubtitleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=addVttTimeMap" })
  addVttTimeMap?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=copyTimestamps" })
  copyTimestamps?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endPositionTicks" })
  endPositionTicks?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startPositionTicks" })
  startPositionTicks?: number;
}


export class GetSubtitleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubtitlePathParams;

  @SpeakeasyMetadata()
  queryParams: GetSubtitleQueryParams;
}


export class GetSubtitleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSubtitle200TextWildcardBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
