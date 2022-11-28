import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteServiceTemplatePathParams extends SpeakeasyBase {
    serviceId: string;
}
export declare class DeleteServiceTemplateSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class DeleteServiceTemplateRequest extends SpeakeasyBase {
    pathParams: DeleteServiceTemplatePathParams;
    security: DeleteServiceTemplateSecurity;
}
export declare class DeleteServiceTemplateResponse extends SpeakeasyBase {
    contentType: string;
    deleted?: shared.Deleted;
    statusCode: number;
}
