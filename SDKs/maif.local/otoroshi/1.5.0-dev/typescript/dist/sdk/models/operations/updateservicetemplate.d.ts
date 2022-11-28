import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateServiceTemplatePathParams extends SpeakeasyBase {
    serviceId: string;
}
export declare class UpdateServiceTemplateSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class UpdateServiceTemplateRequest extends SpeakeasyBase {
    pathParams: UpdateServiceTemplatePathParams;
    request?: shared.ErrorTemplate;
    security: UpdateServiceTemplateSecurity;
}
export declare class UpdateServiceTemplateResponse extends SpeakeasyBase {
    contentType: string;
    errorTemplate?: shared.ErrorTemplate;
    statusCode: number;
}
