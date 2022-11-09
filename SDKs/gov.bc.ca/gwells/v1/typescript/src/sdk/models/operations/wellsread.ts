import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class WellsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=well_tag_number" })
  wellTagNumber: number;
}


export class WellsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: WellsReadPathParams;
}


export class WellsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  wellDetail?: shared.WellDetail;
}
