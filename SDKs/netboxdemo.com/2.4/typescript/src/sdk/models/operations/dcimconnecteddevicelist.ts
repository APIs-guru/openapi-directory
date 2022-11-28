import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimConnectedDeviceListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=peer_device" })
  peerDevice: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=peer_interface" })
  peerInterface: string;
}


export class DcimConnectedDeviceListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DcimConnectedDeviceListQueryParams;
}


export class DcimConnectedDeviceListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  device?: shared.Device;

  @SpeakeasyMetadata()
  statusCode: number;
}
