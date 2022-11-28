import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetClientThumbnailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;
}


export class SetClientThumbnailSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class SetClientThumbnailDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class SetClientThumbnailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetClientThumbnailPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=image/png" })
  request: Uint8Array;

  @SpeakeasyMetadata()
  security: SetClientThumbnailSecurity;
}


export class SetClientThumbnailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setClientThumbnail200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  setClientThumbnailDefaultApplicationJsonObject?: SetClientThumbnailDefaultApplicationJson;
}
