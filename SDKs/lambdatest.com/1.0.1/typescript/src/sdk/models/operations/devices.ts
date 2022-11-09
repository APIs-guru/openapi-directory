import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DevicesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=os" })
  os?: string;
}


export class DevicesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class DevicesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DevicesQueryParams;

  @Metadata()
  security: DevicesSecurity;
}


export class DevicesResponse extends SpeakeasyBase {
  @Metadata()
  accessDenied?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  osDevices?: any;
}
