import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSeriesIdAttachmentsNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetSeriesIdAttachmentsNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetSeriesIdAttachmentsNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSeriesIdAttachmentsNamePathParams;

  @Metadata()
  headers: GetSeriesIdAttachmentsNameHeaders;
}


export class GetSeriesIdAttachmentsNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSeriesIdAttachmentsName200ApplicationJsonAny?: any;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
