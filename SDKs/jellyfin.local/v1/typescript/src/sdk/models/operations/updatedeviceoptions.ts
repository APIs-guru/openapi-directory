import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateDeviceOptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;
}


export class UpdateDeviceOptionsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  deviceOptions?: shared.DeviceOptions;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  deviceOptions1?: shared.DeviceOptions;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  deviceOptions2?: shared.DeviceOptions;
}


export class UpdateDeviceOptionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateDeviceOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UpdateDeviceOptionsQueryParams;

  @SpeakeasyMetadata()
  request: UpdateDeviceOptionsRequests;

  @SpeakeasyMetadata()
  security: UpdateDeviceOptionsSecurity;
}


export class UpdateDeviceOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
