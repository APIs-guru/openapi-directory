import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBlobByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=filename" })
  filename: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetBlobByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBlobByIdPathParams;
}


export class GetBlobByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getBlobById200ImageWildcardBinaryString?: Uint8Array;
}
