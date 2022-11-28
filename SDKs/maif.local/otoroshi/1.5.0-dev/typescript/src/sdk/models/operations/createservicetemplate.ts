import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateServiceTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class CreateServiceTemplateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class CreateServiceTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateServiceTemplatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ErrorTemplate;

  @SpeakeasyMetadata()
  security: CreateServiceTemplateSecurity;
}


export class CreateServiceTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorTemplate?: shared.ErrorTemplate;

  @SpeakeasyMetadata()
  statusCode: number;
}
