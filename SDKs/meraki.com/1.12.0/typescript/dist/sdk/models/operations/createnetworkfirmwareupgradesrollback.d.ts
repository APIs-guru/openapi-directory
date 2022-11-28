import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNetworkFirmwareUpgradesRollbackPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum {
    Wireless = "wireless",
    Switch = "switch",
    Appliance = "appliance",
    Camera = "camera",
    VmxHost = "vmxHost",
    CellularGateway = "cellularGateway"
}
export declare enum CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum {
    Performance = "performance",
    Stability = "stability",
    BrokeOldFeatures = "broke old features",
    UnifyingNetworksVersions = "unifying networks versions",
    Testing = "testing",
    Other = "other"
}
export declare class CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons extends SpeakeasyBase {
    category: CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum;
    comment: string;
}
/**
 * Version to downgrade to (if the network has firmware flexibility)
**/
export declare class CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion extends SpeakeasyBase {
    id?: string;
}
export declare class CreateNetworkFirmwareUpgradesRollbackRequestBody extends SpeakeasyBase {
    product?: CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum;
    reasons: CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons[];
    time?: Date;
    toVersion?: CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion;
}
export declare class CreateNetworkFirmwareUpgradesRollbackRequest extends SpeakeasyBase {
    pathParams: CreateNetworkFirmwareUpgradesRollbackPathParams;
    request: CreateNetworkFirmwareUpgradesRollbackRequestBody;
}
export declare class CreateNetworkFirmwareUpgradesRollbackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNetworkFirmwareUpgradesRollback200ApplicationJsonObject?: Map<string, any>;
}
