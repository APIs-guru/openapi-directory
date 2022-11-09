import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateOrganizationSnmpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum UpdateOrganizationSnmpRequestBodyV3AuthModeEnum {
    Md5 = "MD5"
,    Sha = "SHA"
}

export enum UpdateOrganizationSnmpRequestBodyV3PrivModeEnum {
    Des = "DES"
,    Aes128 = "AES128"
}


export class UpdateOrganizationSnmpRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=peerIps" })
  peerIps?: string[];

  @Metadata({ data: "json, name=v2cEnabled" })
  v2cEnabled?: boolean;

  @Metadata({ data: "json, name=v3AuthMode" })
  v3AuthMode?: UpdateOrganizationSnmpRequestBodyV3AuthModeEnum;

  @Metadata({ data: "json, name=v3AuthPass" })
  v3AuthPass?: string;

  @Metadata({ data: "json, name=v3Enabled" })
  v3Enabled?: boolean;

  @Metadata({ data: "json, name=v3PrivMode" })
  v3PrivMode?: UpdateOrganizationSnmpRequestBodyV3PrivModeEnum;

  @Metadata({ data: "json, name=v3PrivPass" })
  v3PrivPass?: string;
}


export class UpdateOrganizationSnmpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateOrganizationSnmpPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationSnmpRequestBody;
}


export class UpdateOrganizationSnmpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateOrganizationSnmp200ApplicationJsonObject?: Map<string, any>;
}
