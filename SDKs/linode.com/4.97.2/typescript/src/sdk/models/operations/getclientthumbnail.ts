import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetClientThumbnailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;
}


export class GetClientThumbnailDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetClientThumbnailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetClientThumbnailPathParams;
}


export class GetClientThumbnailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getClientThumbnail200ImagePngBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getClientThumbnailDefaultApplicationJsonObject?: GetClientThumbnailDefaultApplicationJson;
}
