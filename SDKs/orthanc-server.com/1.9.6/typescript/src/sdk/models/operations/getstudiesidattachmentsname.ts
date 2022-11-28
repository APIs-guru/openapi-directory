import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStudiesIdAttachmentsNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetStudiesIdAttachmentsNameHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetStudiesIdAttachmentsNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStudiesIdAttachmentsNamePathParams;

  @SpeakeasyMetadata()
  headers: GetStudiesIdAttachmentsNameHeaders;
}


export class GetStudiesIdAttachmentsNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getStudiesIdAttachmentsName200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
