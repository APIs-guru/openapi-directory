import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSeriesIdMetadataNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class DeleteSeriesIdMetadataNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class DeleteSeriesIdMetadataNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSeriesIdMetadataNamePathParams;

  @Metadata()
  headers: DeleteSeriesIdMetadataNameHeaders;
}


export class DeleteSeriesIdMetadataNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
