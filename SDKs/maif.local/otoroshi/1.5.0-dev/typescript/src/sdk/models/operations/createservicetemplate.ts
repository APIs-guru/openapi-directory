import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateServiceTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class CreateServiceTemplateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class CreateServiceTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateServiceTemplatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ErrorTemplate;

  @Metadata()
  security: CreateServiceTemplateSecurity;
}


export class CreateServiceTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorTemplate?: shared.ErrorTemplate;

  @Metadata()
  statusCode: number;
}
