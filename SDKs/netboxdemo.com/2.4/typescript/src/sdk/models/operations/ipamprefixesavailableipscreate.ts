import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IpamPrefixesAvailableIpsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamPrefixesAvailableIpsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IpamPrefixesAvailableIpsCreatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritablePrefixInput;
}


export class IpamPrefixesAvailableIpsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  prefix?: shared.Prefix;

  @SpeakeasyMetadata()
  statusCode: number;
}
