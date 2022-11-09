import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimVirtualChassisReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimVirtualChassisReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimVirtualChassisReadPathParams;
}


export class DcimVirtualChassisReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  virtualChassis?: shared.VirtualChassis;
}
