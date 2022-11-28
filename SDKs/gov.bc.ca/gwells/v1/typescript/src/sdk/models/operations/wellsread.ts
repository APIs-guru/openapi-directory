import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WellsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=well_tag_number" })
  wellTagNumber: number;
}


export class WellsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WellsReadPathParams;
}


export class WellsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  wellDetail?: shared.WellDetail;
}
