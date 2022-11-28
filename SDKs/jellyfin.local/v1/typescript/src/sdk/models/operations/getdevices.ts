import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDevicesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsSync" })
  supportsSync?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetDevicesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDevicesQueryParams;

  @SpeakeasyMetadata()
  security: GetDevicesSecurity;
}


export class GetDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deviceInfoQueryResult?: shared.DeviceInfoQueryResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
