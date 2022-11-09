import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimConnectedDeviceListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=peer_device" })
  peerDevice: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=peer_interface" })
  peerInterface: string;
}


export class DcimConnectedDeviceListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DcimConnectedDeviceListQueryParams;
}


export class DcimConnectedDeviceListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  device?: shared.Device;

  @Metadata()
  statusCode: number;
}
