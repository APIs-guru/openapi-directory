import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBlobByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=filename" })
  filename: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetBlobByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBlobByIdPathParams;
}


export class GetBlobByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getBlobById200ImageWildcardBinaryString?: Uint8Array;
}
