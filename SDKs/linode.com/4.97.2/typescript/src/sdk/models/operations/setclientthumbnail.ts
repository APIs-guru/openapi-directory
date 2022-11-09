import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetClientThumbnailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;
}


export class SetClientThumbnailSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class SetClientThumbnailSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class SetClientThumbnailSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SetClientThumbnailSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SetClientThumbnailSecurityOption2;
}


export class SetClientThumbnailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetClientThumbnailPathParams;

  @Metadata({ data: "request, media_type=image/png" })
  request: Uint8Array;

  @Metadata()
  security: SetClientThumbnailSecurity;
}


export class SetClientThumbnailDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class SetClientThumbnailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setClientThumbnail200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  setClientThumbnailDefaultApplicationJsonObject?: SetClientThumbnailDefaultApplicationJson;
}
