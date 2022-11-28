import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FilesPatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: string;
}


export class FilesPatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FilesPatchPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class FilesPatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
