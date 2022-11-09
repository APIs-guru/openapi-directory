import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProvisionNetworkClientsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class ProvisionNetworkClientsRequestBodyClients extends SpeakeasyBase {
  @Metadata({ data: "json, name=mac" })
  mac: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}

export enum ProvisionNetworkClientsRequestBodyDevicePolicyEnum {
    GroupPolicy = "Group policy"
,    Allowed = "Allowed"
,    Blocked = "Blocked"
,    PerConnection = "Per connection"
,    Normal = "Normal"
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum {
    Allowed = "Allowed"
,    Blocked = "Blocked"
,    Normal = "Normal"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance
/** 
 * An object, describing what the policy-connection association is for the security appliance. (Only relevant if the security appliance is actually within the network)
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePolicy" })
  devicePolicy?: ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum {
    Allowed = "Allowed"
,    Blocked = "Blocked"
,    Normal = "Normal"
,    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid0
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid0 extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum;

  @Metadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum {
    Allowed = "Allowed"
,    Blocked = "Blocked"
,    Normal = "Normal"
,    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid1
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum;

  @Metadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum {
    Allowed = "Allowed"
,    Blocked = "Blocked"
,    Normal = "Normal"
,    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid10
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid10 extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum;

  @Metadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum {
    Allowed = "Allowed"
,    Blocked = "Blocked"
,    Normal = "Normal"
,    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid11
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid11 extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum;

  @Metadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum {
    Allowed = "Allowed"
,    Blocked = "Blocked"
,    Normal = "Normal"
,    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid12
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid12 extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum;

  @Metadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum {
    Allowed = "Allowed"
,    Blocked = "Blocked"
,    Normal = "Normal"
,    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid13
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid13 extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum;

  @Metadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum {
    Allowed = "Allowed"
,    Blocked = "Blocked"
,    Normal = "Normal"
,    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid14
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid14 extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum;

  @Metadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum {
    Allowed = "Allowed"
,    Blocked = "Blocked"
,    Normal = "Normal"
,    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid2
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum;

  @Metadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum {
    Allowed = "Allowed"
,    Blocked = "Blocked"
,    Normal = "Normal"
,    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid3
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum;

  @Metadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum {
    Allowed = "Allowed"
,    Blocked = "Blocked"
,    Normal = "Normal"
,    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid4
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid4 extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum;

  @Metadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum {
    Allowed = "Allowed"
,    Blocked = "Blocked"
,    Normal = "Normal"
,    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid5
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid5 extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum;

  @Metadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum {
    Allowed = "Allowed"
,    Blocked = "Blocked"
,    Normal = "Normal"
,    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid6
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum;

  @Metadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum {
    Allowed = "Allowed"
,    Blocked = "Blocked"
,    Normal = "Normal"
,    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid7
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid7 extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum;

  @Metadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum {
    Allowed = "Allowed"
,    Blocked = "Blocked"
,    Normal = "Normal"
,    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid8
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid8 extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum;

  @Metadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}

export enum ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum {
    Allowed = "Allowed"
,    Blocked = "Blocked"
,    Normal = "Normal"
,    GroupPolicy = "Group policy"
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid9
/** 
 * The number for the SSID
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid9 extends SpeakeasyBase {
  @Metadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum;

  @Metadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;
}


// ProvisionNetworkClientsRequestBodyPoliciesBySsid
/** 
 * An object, describing the policy-connection associations for each active SSID within the network. Keys should be the number of enabled SSIDs, mapping to an object describing the client's policy
**/
export class ProvisionNetworkClientsRequestBodyPoliciesBySsid extends SpeakeasyBase {
  @Metadata({ data: "json, name=0" })
  zero?: ProvisionNetworkClientsRequestBodyPoliciesBySsid0;

  @Metadata({ data: "json, name=1" })
  one?: ProvisionNetworkClientsRequestBodyPoliciesBySsid1;

  @Metadata({ data: "json, name=10" })
  ten?: ProvisionNetworkClientsRequestBodyPoliciesBySsid10;

  @Metadata({ data: "json, name=11" })
  eleven?: ProvisionNetworkClientsRequestBodyPoliciesBySsid11;

  @Metadata({ data: "json, name=12" })
  twelve?: ProvisionNetworkClientsRequestBodyPoliciesBySsid12;

  @Metadata({ data: "json, name=13" })
  thirteen?: ProvisionNetworkClientsRequestBodyPoliciesBySsid13;

  @Metadata({ data: "json, name=14" })
  fourteen?: ProvisionNetworkClientsRequestBodyPoliciesBySsid14;

  @Metadata({ data: "json, name=2" })
  two?: ProvisionNetworkClientsRequestBodyPoliciesBySsid2;

  @Metadata({ data: "json, name=3" })
  three?: ProvisionNetworkClientsRequestBodyPoliciesBySsid3;

  @Metadata({ data: "json, name=4" })
  four?: ProvisionNetworkClientsRequestBodyPoliciesBySsid4;

  @Metadata({ data: "json, name=5" })
  five?: ProvisionNetworkClientsRequestBodyPoliciesBySsid5;

  @Metadata({ data: "json, name=6" })
  six?: ProvisionNetworkClientsRequestBodyPoliciesBySsid6;

  @Metadata({ data: "json, name=7" })
  seven?: ProvisionNetworkClientsRequestBodyPoliciesBySsid7;

  @Metadata({ data: "json, name=8" })
  eight?: ProvisionNetworkClientsRequestBodyPoliciesBySsid8;

  @Metadata({ data: "json, name=9" })
  nine?: ProvisionNetworkClientsRequestBodyPoliciesBySsid9;
}


export class ProvisionNetworkClientsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=clients", elemType: operations.ProvisionNetworkClientsRequestBodyClients })
  clients: ProvisionNetworkClientsRequestBodyClients[];

  @Metadata({ data: "json, name=devicePolicy" })
  devicePolicy: ProvisionNetworkClientsRequestBodyDevicePolicyEnum;

  @Metadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;

  @Metadata({ data: "json, name=policiesBySecurityAppliance" })
  policiesBySecurityAppliance?: ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance;

  @Metadata({ data: "json, name=policiesBySsid" })
  policiesBySsid?: ProvisionNetworkClientsRequestBodyPoliciesBySsid;
}


export class ProvisionNetworkClientsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProvisionNetworkClientsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: ProvisionNetworkClientsRequestBody;
}


export class ProvisionNetworkClientsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  provisionNetworkClients201ApplicationJsonObject?: Map<string, any>;
}
