import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStudiesIdAttachmentsNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetStudiesIdAttachmentsNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetStudiesIdAttachmentsNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStudiesIdAttachmentsNamePathParams;

  @Metadata()
  headers: GetStudiesIdAttachmentsNameHeaders;
}


export class GetStudiesIdAttachmentsNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getStudiesIdAttachmentsName200ApplicationJsonAny?: any;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
