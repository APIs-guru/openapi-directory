import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCategoriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class CreateCategoriesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class CreateCategoriesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class CreateCategoriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateCategoriesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateCategoriesSecurityOption2;
}


export class CreateCategoriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateCategoriesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CategoryRequest;

  @Metadata()
  security: CreateCategoriesSecurity;
}


export class CreateCategoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
