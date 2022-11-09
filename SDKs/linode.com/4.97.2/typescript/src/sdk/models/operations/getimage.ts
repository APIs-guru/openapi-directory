import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetImagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=imageId" })
  imageId: string;
}


export class GetImageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetImagePathParams;
}


export class GetImageDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetImageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  imagePrivate?: shared.ImagePrivate;

  @Metadata()
  statusCode: number;

  @Metadata()
  getImageDefaultApplicationJsonObject?: GetImageDefaultApplicationJson;
}
