import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamIpAddressesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamIpAddressesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamIpAddressesReadPathParams;
}


export class IpamIpAddressesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ipAddress?: shared.IpAddress;

  @Metadata()
  statusCode: number;
}
