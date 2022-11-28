import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceTemplatePathParams extends SpeakeasyBase {
    serviceId: string;
}
export declare class ServiceTemplateSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class ServiceTemplateRequest extends SpeakeasyBase {
    pathParams: ServiceTemplatePathParams;
    security: ServiceTemplateSecurity;
}
export declare class ServiceTemplateResponse extends SpeakeasyBase {
    contentType: string;
    errorTemplate?: shared.ErrorTemplate;
    statusCode: number;
}
