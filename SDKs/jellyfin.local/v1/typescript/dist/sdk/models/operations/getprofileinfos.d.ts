import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProfileInfosSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetProfileInfosRequest extends SpeakeasyBase {
    security: GetProfileInfosSecurity;
}
export declare class GetProfileInfosResponse extends SpeakeasyBase {
    contentType: string;
    deviceProfileInfos?: shared.DeviceProfileInfo[];
    statusCode: number;
}
