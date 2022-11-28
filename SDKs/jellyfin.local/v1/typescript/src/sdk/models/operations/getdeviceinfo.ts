import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDeviceInfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;
}


export class GetDeviceInfoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetDeviceInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeviceInfoQueryParams;

  @SpeakeasyMetadata()
  security: GetDeviceInfoSecurity;
}


export class GetDeviceInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deviceInfo?: shared.DeviceInfo;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
