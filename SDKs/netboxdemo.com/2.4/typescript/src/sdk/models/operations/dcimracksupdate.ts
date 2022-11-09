import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimRacksUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRacksUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRacksUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableRack;
}


export class DcimRacksUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rack?: shared.Rack;

  @Metadata()
  statusCode: number;
}
