import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateServiceTemplatePathParams extends SpeakeasyBase {
    serviceId: string;
}
export declare class CreateServiceTemplateSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class CreateServiceTemplateRequest extends SpeakeasyBase {
    pathParams: CreateServiceTemplatePathParams;
    request?: shared.ErrorTemplate;
    security: CreateServiceTemplateSecurity;
}
export declare class CreateServiceTemplateResponse extends SpeakeasyBase {
    contentType: string;
    errorTemplate?: shared.ErrorTemplate;
    statusCode: number;
}
