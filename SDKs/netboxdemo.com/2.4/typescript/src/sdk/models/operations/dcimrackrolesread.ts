import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimRackRolesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRackRolesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimRackRolesReadPathParams;
}


export class DcimRackRolesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rackRole?: shared.RackRole;

  @SpeakeasyMetadata()
  statusCode: number;
}
