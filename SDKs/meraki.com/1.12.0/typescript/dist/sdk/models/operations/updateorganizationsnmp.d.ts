import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateOrganizationSnmpPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare enum UpdateOrganizationSnmpRequestBodyV3AuthModeEnum {
    Md5 = "MD5",
    Sha = "SHA"
}
export declare enum UpdateOrganizationSnmpRequestBodyV3PrivModeEnum {
    Des = "DES",
    Aes128 = "AES128"
}
export declare class UpdateOrganizationSnmpRequestBody extends SpeakeasyBase {
    peerIps?: string[];
    v2cEnabled?: boolean;
    v3AuthMode?: UpdateOrganizationSnmpRequestBodyV3AuthModeEnum;
    v3AuthPass?: string;
    v3Enabled?: boolean;
    v3PrivMode?: UpdateOrganizationSnmpRequestBodyV3PrivModeEnum;
    v3PrivPass?: string;
}
export declare class UpdateOrganizationSnmpRequest extends SpeakeasyBase {
    pathParams: UpdateOrganizationSnmpPathParams;
    request?: UpdateOrganizationSnmpRequestBody;
}
export declare class UpdateOrganizationSnmpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateOrganizationSnmp200ApplicationJsonObject?: Map<string, any>;
}
