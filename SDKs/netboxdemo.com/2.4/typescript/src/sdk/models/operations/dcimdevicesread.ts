import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimDevicesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDevicesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimDevicesReadPathParams;
}


export class DcimDevicesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deviceWithConfigContext?: shared.DeviceWithConfigContext;

  @SpeakeasyMetadata()
  statusCode: number;
}
