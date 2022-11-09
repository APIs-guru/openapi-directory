import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAddressInfoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class GetAddressInfoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAddressInfoPathParams;
}


export class GetAddressInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAddressInfoResponse?: shared.GetAddressInfoResponse;
}
