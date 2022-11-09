import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimCablesCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableCable;
}


export class DcimCablesCreateResponse extends SpeakeasyBase {
  @Metadata()
  cable?: shared.Cable;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
