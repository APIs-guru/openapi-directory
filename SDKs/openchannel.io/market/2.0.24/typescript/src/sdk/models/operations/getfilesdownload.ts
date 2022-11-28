import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFilesDownloadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fileId" })
  fileId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validSeconds" })
  validSeconds?: number;
}


export class GetFilesDownloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFilesDownloadQueryParams;
}


export class GetFilesDownloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
