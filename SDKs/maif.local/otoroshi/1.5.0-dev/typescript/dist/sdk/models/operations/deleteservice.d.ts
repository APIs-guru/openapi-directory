import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteServicePathParams extends SpeakeasyBase {
    serviceId: string;
}
export declare class DeleteServiceSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class DeleteServiceRequest extends SpeakeasyBase {
    pathParams: DeleteServicePathParams;
    security: DeleteServiceSecurity;
}
export declare class DeleteServiceResponse extends SpeakeasyBase {
    contentType: string;
    deleted?: shared.Deleted;
    statusCode: number;
}
