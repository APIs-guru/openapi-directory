import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateServiceTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class UpdateServiceTemplateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class UpdateServiceTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateServiceTemplatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ErrorTemplate;

  @Metadata()
  security: UpdateServiceTemplateSecurity;
}


export class UpdateServiceTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorTemplate?: shared.ErrorTemplate;

  @Metadata()
  statusCode: number;
}
