import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FilesVersionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: string;
}


export class FilesVersionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FilesVersionsPathParams;
}


export class FilesVersionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
