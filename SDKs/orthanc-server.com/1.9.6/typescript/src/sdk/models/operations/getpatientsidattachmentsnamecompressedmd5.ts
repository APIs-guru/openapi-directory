import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPatientsIdAttachmentsNameCompressedMd5PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetPatientsIdAttachmentsNameCompressedMd5Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetPatientsIdAttachmentsNameCompressedMd5Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPatientsIdAttachmentsNameCompressedMd5PathParams;

  @SpeakeasyMetadata()
  headers: GetPatientsIdAttachmentsNameCompressedMd5Headers;
}


export class GetPatientsIdAttachmentsNameCompressedMd5Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
