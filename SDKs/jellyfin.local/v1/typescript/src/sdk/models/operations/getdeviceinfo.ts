import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDeviceInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;
}


export class GetDeviceInfoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetDeviceInfoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeviceInfoQueryParams;

  @Metadata()
  security: GetDeviceInfoSecurity;
}


export class GetDeviceInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceInfo?: shared.DeviceInfo;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
