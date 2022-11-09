import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSeriesIdMetadataNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetSeriesIdMetadataNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetSeriesIdMetadataNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSeriesIdMetadataNamePathParams;

  @Metadata()
  headers: GetSeriesIdMetadataNameHeaders;
}


export class GetSeriesIdMetadataNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
