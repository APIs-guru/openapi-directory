import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimRacksCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableRack;
}


export class DcimRacksCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  rack?: shared.Rack;

  @Metadata()
  statusCode: number;
}
