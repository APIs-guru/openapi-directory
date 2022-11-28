import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamServicesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamServicesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: IpamServicesPartialUpdatePathParams;
    request: shared.WritableServiceInput;
}
export declare class IpamServicesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    service?: shared.Service;
    statusCode: number;
}
