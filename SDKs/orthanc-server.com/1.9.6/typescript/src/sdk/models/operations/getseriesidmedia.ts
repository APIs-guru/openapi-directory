import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSeriesIdMediaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSeriesIdMediaQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=extended" })
  extended?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transcode" })
  transcode?: string;
}


export class GetSeriesIdMediaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSeriesIdMediaPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSeriesIdMediaQueryParams;
}


export class GetSeriesIdMediaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
