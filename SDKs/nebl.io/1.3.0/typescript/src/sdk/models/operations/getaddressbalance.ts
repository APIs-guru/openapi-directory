import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAddressBalancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class GetAddressBalanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAddressBalancePathParams;
}


export class GetAddressBalanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAddressBalanceResponse?: number;
}
