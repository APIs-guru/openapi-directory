import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkSnmpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkSnmpRequestBodyAccessEnum {
    None = "none"
,    Community = "community"
,    Users = "users"
}


export class UpdateNetworkSnmpRequestBodyUsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=passphrase" })
  passphrase: string;

  @Metadata({ data: "json, name=username" })
  username: string;
}


export class UpdateNetworkSnmpRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access?: UpdateNetworkSnmpRequestBodyAccessEnum;

  @Metadata({ data: "json, name=communityString" })
  communityString?: string;

  @Metadata({ data: "json, name=users", elemType: operations.UpdateNetworkSnmpRequestBodyUsers })
  users?: UpdateNetworkSnmpRequestBodyUsers[];
}


export class UpdateNetworkSnmpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkSnmpPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSnmpRequestBody;
}


export class UpdateNetworkSnmpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkSnmp200ApplicationJsonObject?: Map<string, any>;
}
