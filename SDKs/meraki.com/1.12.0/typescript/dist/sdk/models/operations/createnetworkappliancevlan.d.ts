import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNetworkApplianceVlanPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class CreateNetworkApplianceVlanRequestBody extends SpeakeasyBase {
    applianceIp?: string;
    groupPolicyId?: string;
    id: string;
    name: string;
    subnet?: string;
}
export declare class CreateNetworkApplianceVlanRequest extends SpeakeasyBase {
    pathParams: CreateNetworkApplianceVlanPathParams;
    request: CreateNetworkApplianceVlanRequestBody;
}
export declare class CreateNetworkApplianceVlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNetworkApplianceVlan201ApplicationJsonObject?: Map<string, any>;
}
