import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetImagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageId" })
  imageId: string;
}


export class GetImageDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetImagePathParams;
}


export class GetImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imagePrivate?: shared.ImagePrivate;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getImageDefaultApplicationJsonObject?: GetImageDefaultApplicationJson;
}
