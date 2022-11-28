import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimRackGroupsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRackGroupsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimRackGroupsReadPathParams;
}


export class DcimRackGroupsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  rackGroup?: shared.RackGroup;

  @SpeakeasyMetadata()
  statusCode: number;
}
