import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ServiceTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class ServiceTemplateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ServiceTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ServiceTemplatePathParams;

  @SpeakeasyMetadata()
  security: ServiceTemplateSecurity;
}


export class ServiceTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorTemplate?: shared.ErrorTemplate;

  @SpeakeasyMetadata()
  statusCode: number;
}
