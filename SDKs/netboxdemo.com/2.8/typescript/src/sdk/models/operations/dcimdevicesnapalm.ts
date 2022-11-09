import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimDevicesNapalmPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDevicesNapalmQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=method" })
  method: string;
}


export class DcimDevicesNapalmRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimDevicesNapalmPathParams;

  @Metadata()
  queryParams: DcimDevicesNapalmQueryParams;
}


export class DcimDevicesNapalmResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceNapalm?: shared.DeviceNapalm;

  @Metadata()
  statusCode: number;
}
