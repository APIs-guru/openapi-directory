import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateProductSlugPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class CreateProductSlugSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class CreateProductSlugSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class CreateProductSlugSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateProductSlugSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateProductSlugSecurityOption2;
}


export class CreateProductSlugRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateProductSlugPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateSlugRequest;

  @Metadata()
  security: CreateProductSlugSecurity;
}


export class CreateProductSlugResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  slugResponse?: shared.SlugResponse;

  @Metadata()
  statusCode: number;
}
