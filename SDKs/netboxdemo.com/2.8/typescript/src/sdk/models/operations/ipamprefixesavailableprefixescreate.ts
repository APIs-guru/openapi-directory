import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IpamPrefixesAvailablePrefixesCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamPrefixesAvailablePrefixesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IpamPrefixesAvailablePrefixesCreatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritablePrefixInput;
}


export class IpamPrefixesAvailablePrefixesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AvailablePrefix })
  availablePrefixes?: shared.AvailablePrefix[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
