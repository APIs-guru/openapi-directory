import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateServiceTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class UpdateServiceTemplateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class UpdateServiceTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateServiceTemplatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ErrorTemplate;

  @SpeakeasyMetadata()
  security: UpdateServiceTemplateSecurity;
}


export class UpdateServiceTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorTemplate?: shared.ErrorTemplate;

  @SpeakeasyMetadata()
  statusCode: number;
}
