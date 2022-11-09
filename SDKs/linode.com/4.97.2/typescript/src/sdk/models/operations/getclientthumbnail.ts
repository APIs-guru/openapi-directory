import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetClientThumbnailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;
}


export class GetClientThumbnailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetClientThumbnailPathParams;
}


export class GetClientThumbnailDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetClientThumbnailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getClientThumbnail200ImagePngBinaryString?: Uint8Array;

  @Metadata()
  getClientThumbnailDefaultApplicationJsonObject?: GetClientThumbnailDefaultApplicationJson;
}
