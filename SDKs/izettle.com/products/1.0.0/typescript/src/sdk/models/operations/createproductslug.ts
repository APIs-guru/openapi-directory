import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateProductSlugPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class CreateProductSlugSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth?: shared.SchemeZettleOauth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey?: shared.SchemeZettleApiKey;
}


export class CreateProductSlugRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateProductSlugPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateSlugRequest;

  @SpeakeasyMetadata()
  security: CreateProductSlugSecurity;
}


export class CreateProductSlugResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  slugResponse?: shared.SlugResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
