import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateCategoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class CreateCategoriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey?: shared.SchemeZettleApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth?: shared.SchemeZettleOauth;
}


export class CreateCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateCategoriesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CategoryRequest;

  @SpeakeasyMetadata()
  security: CreateCategoriesSecurity;
}


export class CreateCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
