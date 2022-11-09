import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteImagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=imageId" })
  imageId: string;
}


export class DeleteImageSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteImageSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteImageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteImageSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteImageSecurityOption2;
}


export class DeleteImageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteImagePathParams;

  @Metadata()
  security: DeleteImageSecurity;
}


export class DeleteImageDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteImageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteImage200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteImageDefaultApplicationJsonObject?: DeleteImageDefaultApplicationJson;
}
