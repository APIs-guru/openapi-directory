import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceApplianceDhcpSubnetsPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceApplianceDhcpSubnetsRequest extends SpeakeasyBase {
    pathParams: GetDeviceApplianceDhcpSubnetsPathParams;
}
export declare class GetDeviceApplianceDhcpSubnetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceApplianceDhcpSubnets200ApplicationJsonObject?: Map<string, any>;
}
