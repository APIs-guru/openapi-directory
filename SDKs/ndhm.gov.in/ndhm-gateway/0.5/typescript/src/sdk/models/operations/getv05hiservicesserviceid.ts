import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV05HiServicesServiceIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=service-id" })
  serviceId: string;
}


export class GetV05HiServicesServiceIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetV05HiServicesServiceIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV05HiServicesServiceIdPathParams;

  @Metadata()
  headers: GetV05HiServicesServiceIdHeaders;
}


export class GetV05HiServicesServiceIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  serviceProfileResponse?: shared.ServiceProfileResponse;

  @Metadata()
  statusCode: number;
}
