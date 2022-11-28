import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ModifyNetworkSmDevicesTagsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class ModifyNetworkSmDevicesTagsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: string[];

  @SpeakeasyMetadata({ data: "json, name=serials" })
  serials?: string[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags: string[];

  @SpeakeasyMetadata({ data: "json, name=updateAction" })
  updateAction: string;

  @SpeakeasyMetadata({ data: "json, name=wifiMacs" })
  wifiMacs?: string[];
}


export class ModifyNetworkSmDevicesTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ModifyNetworkSmDevicesTagsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ModifyNetworkSmDevicesTagsRequestBody;
}


export class ModifyNetworkSmDevicesTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  modifyNetworkSmDevicesTags200ApplicationJsonObject?: Map<string, any>;
}
