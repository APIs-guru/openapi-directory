import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimDevicesNapalmPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDevicesNapalmQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=method" })
  method: string;
}


export class DcimDevicesNapalmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimDevicesNapalmPathParams;

  @SpeakeasyMetadata()
  queryParams: DcimDevicesNapalmQueryParams;
}


export class DcimDevicesNapalmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deviceNapalm?: shared.DeviceNapalm;

  @SpeakeasyMetadata()
  statusCode: number;
}
