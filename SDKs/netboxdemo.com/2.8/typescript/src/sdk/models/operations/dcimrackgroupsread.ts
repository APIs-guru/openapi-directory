import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimRackGroupsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRackGroupsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRackGroupsReadPathParams;
}


export class DcimRackGroupsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rackGroup?: shared.RackGroup;

  @Metadata()
  statusCode: number;
}
