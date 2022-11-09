import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimRackGroupsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRackGroupsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRackGroupsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableRackGroup;
}


export class DcimRackGroupsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rackGroup?: shared.RackGroup;

  @Metadata()
  statusCode: number;
}
