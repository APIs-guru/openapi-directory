import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimDevicesGraphsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDevicesGraphsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimDevicesGraphsPathParams;
}


export class DcimDevicesGraphsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deviceWithConfigContext?: shared.DeviceWithConfigContext;

  @SpeakeasyMetadata()
  statusCode: number;
}
