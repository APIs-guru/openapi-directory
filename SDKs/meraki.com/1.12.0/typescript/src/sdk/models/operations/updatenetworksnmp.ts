import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkSnmpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkSnmpRequestBodyAccessEnum {
    None = "none",
    Community = "community",
    Users = "users"
}


export class UpdateNetworkSnmpRequestBodyUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=passphrase" })
  passphrase: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}


export class UpdateNetworkSnmpRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access?: UpdateNetworkSnmpRequestBodyAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=communityString" })
  communityString?: string;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: UpdateNetworkSnmpRequestBodyUsers })
  users?: UpdateNetworkSnmpRequestBodyUsers[];
}


export class UpdateNetworkSnmpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkSnmpPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSnmpRequestBody;
}


export class UpdateNetworkSnmpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkSnmp200ApplicationJsonObject?: Map<string, any>;
}
