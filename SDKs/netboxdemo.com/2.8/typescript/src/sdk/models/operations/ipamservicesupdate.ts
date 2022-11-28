import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IpamServicesUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamServicesUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IpamServicesUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableServiceInput;
}


export class IpamServicesUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  service?: shared.Service;

  @SpeakeasyMetadata()
  statusCode: number;
}
