import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostFilesFileIdGetTemporaryLinkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: string;
}


export class PostFilesFileIdGetTemporaryLink200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=temporary_link" })
  temporaryLink?: shared.TemporaryLinkV1;
}


export class PostFilesFileIdGetTemporaryLink400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: shared.ErrorV1;
}


export class PostFilesFileIdGetTemporaryLink404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: shared.ErrorV1;
}


export class PostFilesFileIdGetTemporaryLinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostFilesFileIdGetTemporaryLinkPathParams;
}


export class PostFilesFileIdGetTemporaryLinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postFilesFileIdGetTemporaryLink200ApplicationJsonObject?: PostFilesFileIdGetTemporaryLink200ApplicationJson;

  @SpeakeasyMetadata()
  postFilesFileIdGetTemporaryLink400ApplicationJsonObject?: PostFilesFileIdGetTemporaryLink400ApplicationJson;

  @SpeakeasyMetadata()
  postFilesFileIdGetTemporaryLink404ApplicationJsonObject?: PostFilesFileIdGetTemporaryLink404ApplicationJson;
}
