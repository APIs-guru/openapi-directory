import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLatestImportStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class GetLatestImportStatusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey?: shared.SchemeZettleApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth?: shared.SchemeZettleOauth;
}


export class GetLatestImportStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLatestImportStatusPathParams;

  @SpeakeasyMetadata()
  security: GetLatestImportStatusSecurity;
}


export class GetLatestImportStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  importResponse?: shared.ImportResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
