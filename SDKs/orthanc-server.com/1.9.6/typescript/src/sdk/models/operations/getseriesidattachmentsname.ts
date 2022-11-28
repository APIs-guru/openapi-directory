import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSeriesIdAttachmentsNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetSeriesIdAttachmentsNameHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetSeriesIdAttachmentsNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSeriesIdAttachmentsNamePathParams;

  @SpeakeasyMetadata()
  headers: GetSeriesIdAttachmentsNameHeaders;
}


export class GetSeriesIdAttachmentsNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSeriesIdAttachmentsName200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
