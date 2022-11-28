import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteNetworkWirelessSsidIdentityPskPathParams extends SpeakeasyBase {
    identityPskId: string;
    networkId: string;
    number: string;
}
export declare class DeleteNetworkWirelessSsidIdentityPskRequest extends SpeakeasyBase {
    pathParams: DeleteNetworkWirelessSsidIdentityPskPathParams;
}
export declare class DeleteNetworkWirelessSsidIdentityPskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
