import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FilesDetailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: string;
}


export class FilesDetailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FilesDetailPathParams;
}


export class FilesDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
