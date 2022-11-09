import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FilesDetailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: string;
}


export class FilesDetailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FilesDetailPathParams;
}


export class FilesDetailResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
