import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSeriesIdArchivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSeriesIdArchiveQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=transcode" })
  transcode?: string;
}


export class GetSeriesIdArchiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSeriesIdArchivePathParams;

  @Metadata()
  queryParams: GetSeriesIdArchiveQueryParams;
}


export class GetSeriesIdArchiveResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
