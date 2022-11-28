import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSeriesIdMetadataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSeriesIdMetadataQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string;
}


export class GetSeriesIdMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSeriesIdMetadataPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSeriesIdMetadataQueryParams;
}


export class GetSeriesIdMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSeriesIdMetadata200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
