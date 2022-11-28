import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProvisionNetworkClientsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class ProvisionNetworkClientsRequestBodyClients extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mac" })
  mac: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum ProvisionNetworkClientsRequestBodyDevicePolicyEnum {
    GroupPolicy = "Group policy",
    Allowed = "Allowed",
    Blocked = "Blocked",
    PerConnection = "Per connection",
    Normal = "Normal"
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance
/** 
 * An object, describing what the policy-connection association is for the security appliance. (Only relevant if the security appliance is actually within the network)
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePolicy" })
  devicePolicy?: ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid0
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid0 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid1
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid10
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid10 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid11
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid11 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid12
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid12 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid13
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid13 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid14
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid14 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid2
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid3
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid4
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid5
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid6
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid7
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid7 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid8
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid8 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum {
    Allowed = "Allowed",
    Blocked = "Blocked",
    Normal = "Normal",
    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid9
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid9 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid
/** 
 * An object, describing the policy-connection associations for each active SSID within the network. Keys should be the number of enabled SSIDs, mapping to an object describing the client's policy
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=0" })
  zero?: ProvisionNetworkClientsRequestBodyPoliciesBySsid0;

  @SpeakeasyMetadata({ data: "json, name=1" })
  one?: ProvisionNetworkClientsRequestBodyPoliciesBySsid1;

  @SpeakeasyMetadata({ data: "json, name=10" })
  ten?: ProvisionNetworkClientsRequestBodyPoliciesBySsid10;

  @SpeakeasyMetadata({ data: "json, name=11" })
  eleven?: ProvisionNetworkClientsRequestBodyPoliciesBySsid11;

  @SpeakeasyMetadata({ data: "json, name=12" })
  twelve?: ProvisionNetworkClientsRequestBodyPoliciesBySsid12;

  @SpeakeasyMetadata({ data: "json, name=13" })
  thirteen?: ProvisionNetworkClientsRequestBodyPoliciesBySsid13;

  @SpeakeasyMetadata({ data: "json, name=14" })
  fourteen?: ProvisionNetworkClientsRequestBodyPoliciesBySsid14;

  @SpeakeasyMetadata({ data: "json, name=2" })
  two?: ProvisionNetworkClientsRequestBodyPoliciesBySsid2;

  @SpeakeasyMetadata({ data: "json, name=3" })
  three?: ProvisionNetworkClientsRequestBodyPoliciesBySsid3;

  @SpeakeasyMetadata({ data: "json, name=4" })
  four?: ProvisionNetworkClientsRequestBodyPoliciesBySsid4;

  @SpeakeasyMetadata({ data: "json, name=5" })
  five?: ProvisionNetworkClientsRequestBodyPoliciesBySsid5;

  @SpeakeasyMetadata({ data: "json, name=6" })
  six?: ProvisionNetworkClientsRequestBodyPoliciesBySsid6;

  @SpeakeasyMetadata({ data: "json, name=7" })
  seven?: ProvisionNetworkClientsRequestBodyPoliciesBySsid7;

  @SpeakeasyMetadata({ data: "json, name=8" })
  eight?: ProvisionNetworkClientsRequestBodyPoliciesBySsid8;

  @SpeakeasyMetadata({ data: "json, name=9" })
  nine?: ProvisionNetworkClientsRequestBodyPoliciesBySsid9;
}


export class ProvisionNetworkClientsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clients", elemType: ProvisionNetworkClientsRequestBodyClients })
  clients: ProvisionNetworkClientsRequestBodyClients[];

  @SpeakeasyMetadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyDevicePolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;

  @SpeakeasyMetadata({ data: "json, name=policiesBySecurityAppliance" })
  policiesBySecurityAppliance?: ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance;

  @SpeakeasyMetadata({ data: "json, name=policiesBySsid" })
  policiesBySsid?: ProvisionNetworkClientsRequestBodyPoliciesBySsid;
}


export class ProvisionNetworkClientsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProvisionNetworkClientsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ProvisionNetworkClientsRequestBody;
}


export class ProvisionNetworkClientsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  provisionNetworkClients201ApplicationJsonObject?: Map<string, any>;
}
