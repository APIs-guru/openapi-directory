import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimCablesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimCablesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimCablesUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableCable;
}


export class DcimCablesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  cable?: shared.Cable;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
