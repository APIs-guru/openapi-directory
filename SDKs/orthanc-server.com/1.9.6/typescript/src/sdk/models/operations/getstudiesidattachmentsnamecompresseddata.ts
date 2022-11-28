import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStudiesIdAttachmentsNameCompressedDataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetStudiesIdAttachmentsNameCompressedDataHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetStudiesIdAttachmentsNameCompressedDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStudiesIdAttachmentsNameCompressedDataPathParams;

  @SpeakeasyMetadata()
  headers: GetStudiesIdAttachmentsNameCompressedDataHeaders;
}


export class GetStudiesIdAttachmentsNameCompressedDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
