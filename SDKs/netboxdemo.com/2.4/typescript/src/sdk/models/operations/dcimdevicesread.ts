import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimDevicesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDevicesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimDevicesReadPathParams;
}


export class DcimDevicesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceWithConfigContext?: shared.DeviceWithConfigContext;

  @Metadata()
  statusCode: number;
}
