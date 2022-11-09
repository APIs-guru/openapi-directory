import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ServiceTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class ServiceTemplateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ServiceTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ServiceTemplatePathParams;

  @Metadata()
  security: ServiceTemplateSecurity;
}


export class ServiceTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorTemplate?: shared.ErrorTemplate;

  @Metadata()
  statusCode: number;
}
