import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLibraryOptionsInfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isNewLibrary" })
  isNewLibrary?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=libraryContentType" })
  libraryContentType?: string;
}


export class GetLibraryOptionsInfoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetLibraryOptionsInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLibraryOptionsInfoQueryParams;

  @SpeakeasyMetadata()
  security: GetLibraryOptionsInfoSecurity;
}


export class GetLibraryOptionsInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  libraryOptionsResultDto?: shared.LibraryOptionsResultDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
