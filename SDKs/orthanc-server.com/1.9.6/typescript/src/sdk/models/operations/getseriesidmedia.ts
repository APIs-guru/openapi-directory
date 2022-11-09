import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSeriesIdMediaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSeriesIdMediaQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=extended" })
  extended?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=transcode" })
  transcode?: string;
}


export class GetSeriesIdMediaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSeriesIdMediaPathParams;

  @Metadata()
  queryParams: GetSeriesIdMediaQueryParams;
}


export class GetSeriesIdMediaResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
