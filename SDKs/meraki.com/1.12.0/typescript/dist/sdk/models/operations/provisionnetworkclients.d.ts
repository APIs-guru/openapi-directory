import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProvisionNetworkClientsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class ProvisionNetworkClientsRequestBodyClients extends SpeakeasyBase {
    mac: string;
    name?: string;
}
export declare enum ProvisionNetworkClientsRequestBodyDevicePolicyEnum {
    GroupPolicy = "Group policy",
    Allowed = "Allowed",
    Blocked = "Blocked",
    PerConnection = "Per connection",
    Normal = "Normal"
}
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal"
}
/**
 * An object, describing what the policy-connection association is for the security appliance. (Only relevant if the security appliance is actually within the network)
**/
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance extends SpeakeasyBase {
    devicePolicy?: ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum;
}
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}
/**
 * The number for the SSID
**/
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid0 extends SpeakeasyBase {
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum;
    groupPolicyId?: string;
}
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}
/**
 * The number for the SSID
**/
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid1 extends SpeakeasyBase {
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum;
    groupPolicyId?: string;
}
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}
/**
 * The number for the SSID
**/
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid10 extends SpeakeasyBase {
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum;
    groupPolicyId?: string;
}
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}
/**
 * The number for the SSID
**/
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid11 extends SpeakeasyBase {
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum;
    groupPolicyId?: string;
}
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}
/**
 * The number for the SSID
**/
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid12 extends SpeakeasyBase {
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum;
    groupPolicyId?: string;
}
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}
/**
 * The number for the SSID
**/
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid13 extends SpeakeasyBase {
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum;
    groupPolicyId?: string;
}
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}
/**
 * The number for the SSID
**/
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid14 extends SpeakeasyBase {
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum;
    groupPolicyId?: string;
}
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}
/**
 * The number for the SSID
**/
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid2 extends SpeakeasyBase {
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum;
    groupPolicyId?: string;
}
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}
/**
 * The number for the SSID
**/
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid3 extends SpeakeasyBase {
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum;
    groupPolicyId?: string;
}
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}
/**
 * The number for the SSID
**/
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid4 extends SpeakeasyBase {
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum;
    groupPolicyId?: string;
}
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}
/**
 * The number for the SSID
**/
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid5 extends SpeakeasyBase {
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum;
    groupPolicyId?: string;
}
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}
/**
 * The number for the SSID
**/
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid6 extends SpeakeasyBase {
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum;
    groupPolicyId?: string;
}
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}
/**
 * The number for the SSID
**/
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid7 extends SpeakeasyBase {
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum;
    groupPolicyId?: string;
}
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}
/**
 * The number for the SSID
**/
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid8 extends SpeakeasyBase {
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum;
    groupPolicyId?: string;
}
export declare enum ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}
/**
 * The number for the SSID
**/
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid9 extends SpeakeasyBase {
    devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum;
    groupPolicyId?: string;
}
/**
 * An object, describing the policy-connection associations for each active SSID within the network. Keys should be the number of enabled SSIDs, mapping to an object describing the client's policy
**/
export declare class ProvisionNetworkClientsRequestBodyPoliciesBySsid extends SpeakeasyBase {
    zero?: ProvisionNetworkClientsRequestBodyPoliciesBySsid0;
    one?: ProvisionNetworkClientsRequestBodyPoliciesBySsid1;
    ten?: ProvisionNetworkClientsRequestBodyPoliciesBySsid10;
    eleven?: ProvisionNetworkClientsRequestBodyPoliciesBySsid11;
    twelve?: ProvisionNetworkClientsRequestBodyPoliciesBySsid12;
    thirteen?: ProvisionNetworkClientsRequestBodyPoliciesBySsid13;
    fourteen?: ProvisionNetworkClientsRequestBodyPoliciesBySsid14;
    two?: ProvisionNetworkClientsRequestBodyPoliciesBySsid2;
    three?: ProvisionNetworkClientsRequestBodyPoliciesBySsid3;
    four?: ProvisionNetworkClientsRequestBodyPoliciesBySsid4;
    five?: ProvisionNetworkClientsRequestBodyPoliciesBySsid5;
    six?: ProvisionNetworkClientsRequestBodyPoliciesBySsid6;
    seven?: ProvisionNetworkClientsRequestBodyPoliciesBySsid7;
    eight?: ProvisionNetworkClientsRequestBodyPoliciesBySsid8;
    nine?: ProvisionNetworkClientsRequestBodyPoliciesBySsid9;
}
export declare class ProvisionNetworkClientsRequestBody extends SpeakeasyBase {
    clients: ProvisionNetworkClientsRequestBodyClients[];
    devicePolicy: ProvisionNetworkClientsRequestBodyDevicePolicyEnum;
    groupPolicyId?: string;
    policiesBySecurityAppliance?: ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance;
    policiesBySsid?: ProvisionNetworkClientsRequestBodyPoliciesBySsid;
}
export declare class ProvisionNetworkClientsRequest extends SpeakeasyBase {
    pathParams: ProvisionNetworkClientsPathParams;
    request: ProvisionNetworkClientsRequestBody;
}
export declare class ProvisionNetworkClientsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    provisionNetworkClients201ApplicationJsonObject?: Map<string, any>;
}
