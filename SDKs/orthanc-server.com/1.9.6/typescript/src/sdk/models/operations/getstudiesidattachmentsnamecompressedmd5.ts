import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStudiesIdAttachmentsNameCompressedMd5PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetStudiesIdAttachmentsNameCompressedMd5Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetStudiesIdAttachmentsNameCompressedMd5Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStudiesIdAttachmentsNameCompressedMd5PathParams;

  @SpeakeasyMetadata()
  headers: GetStudiesIdAttachmentsNameCompressedMd5Headers;
}


export class GetStudiesIdAttachmentsNameCompressedMd5Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
