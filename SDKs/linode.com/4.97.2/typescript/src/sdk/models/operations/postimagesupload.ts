import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const POSTIMAGESUPLOAD_SERVERS = [
	"https://api.linode.com/v4",
	"https://api.linode.com/v4beta",
];



export class PostImagesUploadRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=region" })
  region: string;
}


export class PostImagesUploadSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class PostImagesUploadSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class PostImagesUploadSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostImagesUploadSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostImagesUploadSecurityOption2;
}


export class PostImagesUploadRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostImagesUploadRequestBody;

  @Metadata()
  security: PostImagesUploadSecurity;
}


export class PostImagesUpload200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image?: shared.ImagePrivate;

  @Metadata({ data: "json, name=upload_to" })
  uploadTo?: string;
}


export class PostImagesUploadDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class PostImagesUploadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postImagesUpload200ApplicationJsonObject?: PostImagesUpload200ApplicationJson;

  @Metadata()
  postImagesUploadDefaultApplicationJsonObject?: PostImagesUploadDefaultApplicationJson;

  @Metadata()
  statusCode: number;
}
