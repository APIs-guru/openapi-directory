import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamIpAddressesPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamIpAddressesPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamIpAddressesPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableIpAddress;
}


export class IpamIpAddressesPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ipAddress?: shared.IpAddress;

  @Metadata()
  statusCode: number;
}
