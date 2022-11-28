import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FilesVersionDetailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version_id" })
  versionId: string;
}


export class FilesVersionDetailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FilesVersionDetailPathParams;
}


export class FilesVersionDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
