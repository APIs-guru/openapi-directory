import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UploadsCreateRequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class UploadsCreateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file: UploadsCreateRequestBodyFile;
}


export class UploadsCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: UploadsCreateRequestBody;
}


export class UploadsCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fileResponse?: shared.FileResponse;

  @Metadata()
  statusCode: number;
}
