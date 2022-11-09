import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimRackRolesPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRackRolesPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRackRolesPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RackRole;
}


export class DcimRackRolesPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rackRole?: shared.RackRole;

  @Metadata()
  statusCode: number;
}
