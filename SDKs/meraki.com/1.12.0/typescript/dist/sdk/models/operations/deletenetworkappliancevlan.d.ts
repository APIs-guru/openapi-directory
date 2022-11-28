import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteNetworkApplianceVlanPathParams extends SpeakeasyBase {
    networkId: string;
    vlanId: string;
}
export declare class DeleteNetworkApplianceVlanRequest extends SpeakeasyBase {
    pathParams: DeleteNetworkApplianceVlanPathParams;
}
export declare class DeleteNetworkApplianceVlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
