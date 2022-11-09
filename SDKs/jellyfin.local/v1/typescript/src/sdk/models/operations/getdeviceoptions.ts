import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDeviceOptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;
}


export class GetDeviceOptionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetDeviceOptionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeviceOptionsQueryParams;

  @Metadata()
  security: GetDeviceOptionsSecurity;
}


export class GetDeviceOptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceOptions?: shared.DeviceOptions;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
