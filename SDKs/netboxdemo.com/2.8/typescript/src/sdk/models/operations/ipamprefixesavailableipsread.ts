import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IpamPrefixesAvailableIpsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamPrefixesAvailableIpsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IpamPrefixesAvailableIpsReadPathParams;
}


export class IpamPrefixesAvailableIpsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AvailableIp })
  availableIps?: shared.AvailableIp[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
