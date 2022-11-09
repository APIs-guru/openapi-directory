import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VirtualizationInterfacesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationInterfacesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VirtualizationInterfacesUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableInterface;
}


export class VirtualizationInterfacesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  interface?: shared.Interface;

  @Metadata()
  statusCode: number;
}
