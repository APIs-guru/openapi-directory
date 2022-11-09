import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimRackGroupsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRackGroupsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRackGroupsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableRackGroup;
}


export class DcimRackGroupsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rackGroup?: shared.RackGroup;

  @Metadata()
  statusCode: number;
}
