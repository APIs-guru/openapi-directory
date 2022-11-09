import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStudiesIdMetadataNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetStudiesIdMetadataNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetStudiesIdMetadataNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStudiesIdMetadataNamePathParams;

  @Metadata()
  headers: GetStudiesIdMetadataNameHeaders;
}


export class GetStudiesIdMetadataNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
