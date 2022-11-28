import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateImagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageId" })
  imageId: string;
}


export class UpdateImageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class UpdateImageDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateImagePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ImagePrivateInput;

  @SpeakeasyMetadata()
  security: UpdateImageSecurity;
}


export class UpdateImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imagePrivate?: shared.ImagePrivate;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateImageDefaultApplicationJsonObject?: UpdateImageDefaultApplicationJson;
}
