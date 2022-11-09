import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAllImageUrlsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class GetAllImageUrlsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class GetAllImageUrlsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class GetAllImageUrlsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetAllImageUrlsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetAllImageUrlsSecurityOption2;
}


export class GetAllImageUrlsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAllImageUrlsPathParams;

  @Metadata()
  security: GetAllImageUrlsSecurity;
}


export class GetAllImageUrlsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  libraryImagesResponse?: shared.LibraryImagesResponse;

  @Metadata()
  statusCode: number;
}
