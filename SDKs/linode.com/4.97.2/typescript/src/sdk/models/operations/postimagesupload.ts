import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const PostImagesUploadServerList = [
	"https://api.linode.com/v4",
	"https://api.linode.com/v4beta",
] as const;


export class PostImagesUploadRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: string;
}


export class PostImagesUploadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class PostImagesUpload200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: shared.ImagePrivate;

  @SpeakeasyMetadata({ data: "json, name=upload_to" })
  uploadTo?: string;
}


export class PostImagesUploadDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class PostImagesUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostImagesUploadRequestBody;

  @SpeakeasyMetadata()
  security: PostImagesUploadSecurity;
}


export class PostImagesUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postImagesUpload200ApplicationJsonObject?: PostImagesUpload200ApplicationJson;

  @SpeakeasyMetadata()
  postImagesUploadDefaultApplicationJsonObject?: PostImagesUploadDefaultApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
