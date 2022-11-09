import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimInterfacesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimInterfacesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimInterfacesUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableInterface;
}


export class DcimInterfacesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  interface?: shared.Interface;

  @Metadata()
  statusCode: number;
}
