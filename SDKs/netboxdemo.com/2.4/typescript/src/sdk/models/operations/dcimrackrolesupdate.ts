import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimRackRolesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRackRolesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRackRolesUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RackRole;
}


export class DcimRackRolesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rackRole?: shared.RackRole;

  @Metadata()
  statusCode: number;
}
