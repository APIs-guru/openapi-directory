import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimVirtualChassisUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimVirtualChassisUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimVirtualChassisUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableVirtualChassis;
}


export class DcimVirtualChassisUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  virtualChassis?: shared.VirtualChassis;
}
