import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamServicesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamServicesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamServicesUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableService;
}


export class IpamServicesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  service?: shared.Service;

  @Metadata()
  statusCode: number;
}
