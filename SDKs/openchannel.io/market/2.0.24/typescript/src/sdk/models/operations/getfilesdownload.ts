import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFilesDownloadQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fileId" })
  fileId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=validSeconds" })
  validSeconds?: number;
}


export class GetFilesDownloadRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFilesDownloadQueryParams;
}


export class GetFilesDownloadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
