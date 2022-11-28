import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkSmDevicesFieldsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields
/** 
 * The new fields of the device. Each field of this object is optional.
**/
export class UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;
}


export class UpdateNetworkSmDevicesFieldsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceFields" })
  deviceFields: UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=serial" })
  serial?: string;

  @SpeakeasyMetadata({ data: "json, name=wifiMac" })
  wifiMac?: string;
}


export class UpdateNetworkSmDevicesFieldsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkSmDevicesFieldsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkSmDevicesFieldsRequestBody;
}


export class UpdateNetworkSmDevicesFieldsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkSmDevicesFields200ApplicationJsonObject?: Map<string, any>;
}
