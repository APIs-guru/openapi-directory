import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllImageUrlsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class GetAllImageUrlsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey?: shared.SchemeZettleApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth?: shared.SchemeZettleOauth;
}


export class GetAllImageUrlsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAllImageUrlsPathParams;

  @SpeakeasyMetadata()
  security: GetAllImageUrlsSecurity;
}


export class GetAllImageUrlsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  libraryImagesResponse?: shared.LibraryImagesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
