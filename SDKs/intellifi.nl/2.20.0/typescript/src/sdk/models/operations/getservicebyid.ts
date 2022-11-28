import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetServiceByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetServiceByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetServiceByIdPathParams;
}


export class GetServiceByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  service?: shared.Service;

  @SpeakeasyMetadata()
  statusCode: number;
}
