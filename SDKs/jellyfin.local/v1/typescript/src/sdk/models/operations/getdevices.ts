import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDevicesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=supportsSync" })
  supportsSync?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetDevicesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetDevicesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDevicesQueryParams;

  @Metadata()
  security: GetDevicesSecurity;
}


export class GetDevicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceInfoQueryResult?: shared.DeviceInfoQueryResult;

  @Metadata()
  statusCode: number;
}
