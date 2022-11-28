import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IpamIpAddressesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamIpAddressesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IpamIpAddressesDeletePathParams;
}


export class IpamIpAddressesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
