import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IpamPrefixesUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamPrefixesUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IpamPrefixesUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritablePrefixInput;
}


export class IpamPrefixesUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  prefix?: shared.Prefix;

  @SpeakeasyMetadata()
  statusCode: number;
}
