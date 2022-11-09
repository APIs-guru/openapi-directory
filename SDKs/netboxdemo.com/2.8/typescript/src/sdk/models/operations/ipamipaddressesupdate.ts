import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamIpAddressesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamIpAddressesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamIpAddressesUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableIpAddress;
}


export class IpamIpAddressesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ipAddress?: shared.IpAddress;

  @Metadata()
  statusCode: number;
}
