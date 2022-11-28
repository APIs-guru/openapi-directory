import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStatusByUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=importUuid" })
  importUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class GetStatusByUuidSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey?: shared.SchemeZettleApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth?: shared.SchemeZettleOauth;
}


export class GetStatusByUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStatusByUuidPathParams;

  @SpeakeasyMetadata()
  security: GetStatusByUuidSecurity;
}


export class GetStatusByUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  importResponse?: shared.ImportResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
