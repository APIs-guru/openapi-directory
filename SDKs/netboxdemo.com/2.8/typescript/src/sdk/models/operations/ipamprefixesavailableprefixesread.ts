import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IpamPrefixesAvailablePrefixesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamPrefixesAvailablePrefixesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IpamPrefixesAvailablePrefixesReadPathParams;
}


export class IpamPrefixesAvailablePrefixesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AvailablePrefix })
  availablePrefixes?: shared.AvailablePrefix[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
