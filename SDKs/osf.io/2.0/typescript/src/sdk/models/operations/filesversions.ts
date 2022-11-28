import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FilesVersionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: string;
}


export class FilesVersionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FilesVersionsPathParams;
}


export class FilesVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
