import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSubtitleWithTicksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=mediaSourceId" })
  mediaSourceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=startPositionTicks" })
  startPositionTicks: number;
}


export class GetSubtitleWithTicksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=addVttTimeMap" })
  addVttTimeMap?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=copyTimestamps" })
  copyTimestamps?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endPositionTicks" })
  endPositionTicks?: number;
}


export class GetSubtitleWithTicksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSubtitleWithTicksPathParams;

  @Metadata()
  queryParams: GetSubtitleWithTicksQueryParams;
}


export class GetSubtitleWithTicksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSubtitleWithTicks200TextWildcardBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
