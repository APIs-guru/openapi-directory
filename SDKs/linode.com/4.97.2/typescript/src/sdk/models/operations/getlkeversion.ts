import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLkeVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetLkeVersionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetLkeVersionDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLkeVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLkeVersionPathParams;

  @SpeakeasyMetadata()
  security: GetLkeVersionSecurity;
}


export class GetLkeVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  lkeVersion?: shared.LkeVersion;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLkeVersionDefaultApplicationJsonObject?: GetLkeVersionDefaultApplicationJson;
}
