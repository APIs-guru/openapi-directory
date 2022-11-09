import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDeviceOptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;
}


export class UpdateDeviceOptionsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  deviceOptions?: shared.DeviceOptions;

  @Metadata({ data: "request, media_type=application/json" })
  deviceOptions1?: shared.DeviceOptions;

  @Metadata({ data: "request, media_type=text/json" })
  deviceOptions2?: shared.DeviceOptions;
}


export class UpdateDeviceOptionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateDeviceOptionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UpdateDeviceOptionsQueryParams;

  @Metadata()
  request: UpdateDeviceOptionsRequests;

  @Metadata()
  security: UpdateDeviceOptionsSecurity;
}


export class UpdateDeviceOptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
