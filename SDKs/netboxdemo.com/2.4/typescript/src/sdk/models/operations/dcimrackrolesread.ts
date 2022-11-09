import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimRackRolesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRackRolesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRackRolesReadPathParams;
}


export class DcimRackRolesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rackRole?: shared.RackRole;

  @Metadata()
  statusCode: number;
}
