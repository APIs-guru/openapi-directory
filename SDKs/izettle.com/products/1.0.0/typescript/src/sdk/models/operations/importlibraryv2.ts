import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ImportLibraryV2PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class ImportLibraryV2SecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class ImportLibraryV2SecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class ImportLibraryV2Security extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ImportLibraryV2SecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ImportLibraryV2SecurityOption2;
}


export class ImportLibraryV2Request extends SpeakeasyBase {
  @Metadata()
  pathParams: ImportLibraryV2PathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BulkImportRequest;

  @Metadata()
  security: ImportLibraryV2Security;
}


export class ImportLibraryV2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  importResponse?: shared.ImportResponse;

  @Metadata()
  statusCode: number;
}
