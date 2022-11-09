import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSubtitlePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=mediaSourceId" })
  mediaSourceId: string;
}


export class GetSubtitleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=addVttTimeMap" })
  addVttTimeMap?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=copyTimestamps" })
  copyTimestamps?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endPositionTicks" })
  endPositionTicks?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startPositionTicks" })
  startPositionTicks?: number;
}


export class GetSubtitleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSubtitlePathParams;

  @Metadata()
  queryParams: GetSubtitleQueryParams;
}


export class GetSubtitleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSubtitle200TextWildcardBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
