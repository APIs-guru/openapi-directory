import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimVirtualChassisReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimVirtualChassisReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimVirtualChassisReadPathParams;
}


export class DcimVirtualChassisReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  virtualChassis?: shared.VirtualChassis;
}
