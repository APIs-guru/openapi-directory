import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSeriesIdMetadataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSeriesIdMetadataQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string;
}


export class GetSeriesIdMetadataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSeriesIdMetadataPathParams;

  @Metadata()
  queryParams: GetSeriesIdMetadataQueryParams;
}


export class GetSeriesIdMetadataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSeriesIdMetadata200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
