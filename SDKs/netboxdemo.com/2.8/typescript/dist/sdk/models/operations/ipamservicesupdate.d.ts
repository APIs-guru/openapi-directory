import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamServicesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamServicesUpdateRequest extends SpeakeasyBase {
    pathParams: IpamServicesUpdatePathParams;
    request: shared.WritableServiceInput;
}
export declare class IpamServicesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    service?: shared.Service;
    statusCode: number;
}
