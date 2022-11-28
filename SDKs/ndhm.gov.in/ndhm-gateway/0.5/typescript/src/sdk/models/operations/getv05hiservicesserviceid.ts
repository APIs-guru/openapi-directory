import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV05HiServicesServiceIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=service-id" })
  serviceId: string;
}


export class GetV05HiServicesServiceIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetV05HiServicesServiceIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV05HiServicesServiceIdPathParams;

  @SpeakeasyMetadata()
  headers: GetV05HiServicesServiceIdHeaders;
}


export class GetV05HiServicesServiceIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  serviceProfileResponse?: shared.ServiceProfileResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
