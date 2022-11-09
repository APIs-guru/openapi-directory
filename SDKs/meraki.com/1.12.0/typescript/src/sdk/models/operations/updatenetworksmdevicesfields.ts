import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkSmDevicesFieldsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields
/** 
 * The new fields of the device. Each field of this object is optional.
**/
export class UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;
}


export class UpdateNetworkSmDevicesFieldsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceFields" })
  deviceFields: UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=serial" })
  serial?: string;

  @Metadata({ data: "json, name=wifiMac" })
  wifiMac?: string;
}


export class UpdateNetworkSmDevicesFieldsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkSmDevicesFieldsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkSmDevicesFieldsRequestBody;
}


export class UpdateNetworkSmDevicesFieldsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkSmDevicesFields200ApplicationJsonObject?: Map<string, any>;
}
