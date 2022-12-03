import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFilesFileIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: string;
}


export class GetFilesFileId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: shared.FileV1;
}


export class GetFilesFileId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: shared.ErrorV1;
}


export class GetFilesFileId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: shared.ErrorV1;
}


export class GetFilesFileIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFilesFileIdPathParams;
}


export class GetFilesFileIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getFilesFileId200ApplicationJsonObject?: GetFilesFileId200ApplicationJson;

  @SpeakeasyMetadata()
  getFilesFileId400ApplicationJsonObject?: GetFilesFileId400ApplicationJson;

  @SpeakeasyMetadata()
  getFilesFileId404ApplicationJsonObject?: GetFilesFileId404ApplicationJson;
}
