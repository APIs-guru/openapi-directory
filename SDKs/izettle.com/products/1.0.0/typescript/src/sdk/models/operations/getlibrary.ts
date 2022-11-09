import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLibraryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class GetLibraryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=all" })
  all?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=eventLogUuid" })
  eventLogUuid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetLibrarySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class GetLibrarySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class GetLibrarySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLibrarySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLibrarySecurityOption2;
}


export class GetLibraryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLibraryPathParams;

  @Metadata()
  queryParams: GetLibraryQueryParams;

  @Metadata()
  security: GetLibrarySecurity;
}


export class GetLibraryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  libraryResponse?: shared.LibraryResponse;

  @Metadata()
  statusCode: number;
}
