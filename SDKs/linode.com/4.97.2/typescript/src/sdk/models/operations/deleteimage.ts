import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteImagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageId" })
  imageId: string;
}


export class DeleteImageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeleteImageDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteImagePathParams;

  @SpeakeasyMetadata()
  security: DeleteImageSecurity;
}


export class DeleteImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteImage200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deleteImageDefaultApplicationJsonObject?: DeleteImageDefaultApplicationJson;
}
