import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDeviceQueryParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteDeviceSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class DeleteDeviceRequest extends SpeakeasyBase {
    queryParams: DeleteDeviceQueryParams;
    security: DeleteDeviceSecurity;
}
export declare class DeleteDeviceResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
