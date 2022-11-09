import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FilesVersionDetailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version_id" })
  versionId: string;
}


export class FilesVersionDetailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FilesVersionDetailPathParams;
}


export class FilesVersionDetailResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
