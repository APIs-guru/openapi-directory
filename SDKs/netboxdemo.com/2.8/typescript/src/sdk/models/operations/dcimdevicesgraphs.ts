import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimDevicesGraphsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDevicesGraphsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimDevicesGraphsPathParams;
}


export class DcimDevicesGraphsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceWithConfigContext?: shared.DeviceWithConfigContext;

  @Metadata()
  statusCode: number;
}
