import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FilesPatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: string;
}


export class FilesPatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FilesPatchPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class FilesPatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
