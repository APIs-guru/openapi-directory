import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimCablesPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimCablesPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimCablesPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableCable;
}


export class DcimCablesPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  cable?: shared.Cable;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
