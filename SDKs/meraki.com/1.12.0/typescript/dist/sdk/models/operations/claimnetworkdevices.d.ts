import { SpeakeasyBase } from "../../../internal/utils";
export declare class ClaimNetworkDevicesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class ClaimNetworkDevicesRequestBody extends SpeakeasyBase {
    serials: string[];
}
export declare class ClaimNetworkDevicesRequest extends SpeakeasyBase {
    pathParams: ClaimNetworkDevicesPathParams;
    request: ClaimNetworkDevicesRequestBody;
}
export declare class ClaimNetworkDevicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
