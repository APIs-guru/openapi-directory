import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImportLibraryV2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class ImportLibraryV2Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey?: shared.SchemeZettleApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth?: shared.SchemeZettleOauth;
}


export class ImportLibraryV2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ImportLibraryV2PathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BulkImportRequest;

  @SpeakeasyMetadata()
  security: ImportLibraryV2Security;
}


export class ImportLibraryV2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  importResponse?: shared.ImportResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
