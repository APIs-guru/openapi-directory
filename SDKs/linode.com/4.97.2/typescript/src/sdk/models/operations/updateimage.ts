import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateImagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=imageId" })
  imageId: string;
}


export class UpdateImageSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateImageSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateImageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateImageSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateImageSecurityOption2;
}


export class UpdateImageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateImagePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ImagePrivate;

  @Metadata()
  security: UpdateImageSecurity;
}


export class UpdateImageDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateImageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  imagePrivate?: shared.ImagePrivate;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateImageDefaultApplicationJsonObject?: UpdateImageDefaultApplicationJson;
}
