import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateOrganizationSnmpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum UpdateOrganizationSnmpRequestBodyV3AuthModeEnum {
    Md5 = "MD5",
    Sha = "SHA"
}

export enum UpdateOrganizationSnmpRequestBodyV3PrivModeEnum {
    Des = "DES",
    Aes128 = "AES128"
}


export class UpdateOrganizationSnmpRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=peerIps" })
  peerIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=v2cEnabled" })
  v2cEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=v3AuthMode" })
  v3AuthMode?: UpdateOrganizationSnmpRequestBodyV3AuthModeEnum;

  @SpeakeasyMetadata({ data: "json, name=v3AuthPass" })
  v3AuthPass?: string;

  @SpeakeasyMetadata({ data: "json, name=v3Enabled" })
  v3Enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=v3PrivMode" })
  v3PrivMode?: UpdateOrganizationSnmpRequestBodyV3PrivModeEnum;

  @SpeakeasyMetadata({ data: "json, name=v3PrivPass" })
  v3PrivPass?: string;
}


export class UpdateOrganizationSnmpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateOrganizationSnmpPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationSnmpRequestBody;
}


export class UpdateOrganizationSnmpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateOrganizationSnmp200ApplicationJsonObject?: Map<string, any>;
}
