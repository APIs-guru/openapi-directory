import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateImageSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateImageSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateImageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateImageSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateImageSecurityOption2;
}


export class CreateImageRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: CreateImageSecurity;
}


export class CreateImageDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateImageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  imagePrivate?: shared.ImagePrivate;

  @Metadata()
  statusCode: number;

  @Metadata()
  createImageDefaultApplicationJsonObject?: CreateImageDefaultApplicationJson;
}
