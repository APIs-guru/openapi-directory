import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLibraryOptionsInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=isNewLibrary" })
  isNewLibrary?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=libraryContentType" })
  libraryContentType?: string;
}


export class GetLibraryOptionsInfoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetLibraryOptionsInfoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLibraryOptionsInfoQueryParams;

  @Metadata()
  security: GetLibraryOptionsInfoSecurity;
}


export class GetLibraryOptionsInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  libraryOptionsResultDto?: shared.LibraryOptionsResultDto;

  @Metadata()
  statusCode: number;
}
