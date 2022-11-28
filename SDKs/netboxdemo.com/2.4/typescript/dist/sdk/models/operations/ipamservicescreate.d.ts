import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamServicesCreateRequest extends SpeakeasyBase {
    request: shared.WritableServiceInput;
}
export declare class IpamServicesCreateResponse extends SpeakeasyBase {
    contentType: string;
    service?: shared.Service;
    statusCode: number;
}
