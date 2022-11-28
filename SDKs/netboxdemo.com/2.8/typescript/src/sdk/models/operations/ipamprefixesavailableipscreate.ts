import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IpamPrefixesAvailableIpsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamPrefixesAvailableIpsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IpamPrefixesAvailableIpsCreatePathParams;
}


export class IpamPrefixesAvailableIpsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AvailableIp })
  availableIps?: shared.AvailableIp[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
