import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IpamIpAddressesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamIpAddressesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamIpAddressesDeletePathParams;
}


export class IpamIpAddressesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
