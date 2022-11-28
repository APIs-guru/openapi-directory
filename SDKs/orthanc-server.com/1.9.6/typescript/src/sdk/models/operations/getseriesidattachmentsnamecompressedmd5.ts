import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSeriesIdAttachmentsNameCompressedMd5PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetSeriesIdAttachmentsNameCompressedMd5Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetSeriesIdAttachmentsNameCompressedMd5Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSeriesIdAttachmentsNameCompressedMd5PathParams;

  @SpeakeasyMetadata()
  headers: GetSeriesIdAttachmentsNameCompressedMd5Headers;
}


export class GetSeriesIdAttachmentsNameCompressedMd5Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
