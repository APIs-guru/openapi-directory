import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimDevicesNapalmPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDevicesNapalmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimDevicesNapalmPathParams;
}


export class DcimDevicesNapalmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  device?: shared.Device;

  @SpeakeasyMetadata()
  statusCode: number;
}
