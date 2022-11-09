import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ModifyNetworkSmDevicesTagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class ModifyNetworkSmDevicesTagsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=scope" })
  scope?: string[];

  @Metadata({ data: "json, name=serials" })
  serials?: string[];

  @Metadata({ data: "json, name=tags" })
  tags: string[];

  @Metadata({ data: "json, name=updateAction" })
  updateAction: string;

  @Metadata({ data: "json, name=wifiMacs" })
  wifiMacs?: string[];
}


export class ModifyNetworkSmDevicesTagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ModifyNetworkSmDevicesTagsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: ModifyNetworkSmDevicesTagsRequestBody;
}


export class ModifyNetworkSmDevicesTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  modifyNetworkSmDevicesTags200ApplicationJsonObject?: Map<string, any>;
}
