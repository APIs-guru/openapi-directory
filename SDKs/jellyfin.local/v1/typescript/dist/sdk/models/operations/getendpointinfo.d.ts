import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEndpointInfoSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetEndpointInfoRequest extends SpeakeasyBase {
    security: GetEndpointInfoSecurity;
}
export declare class GetEndpointInfoResponse extends SpeakeasyBase {
    contentType: string;
    endPointInfo?: shared.EndPointInfo;
    statusCode: number;
}
