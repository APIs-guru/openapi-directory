import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAddressUnconfirmedBalancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class GetAddressUnconfirmedBalanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAddressUnconfirmedBalancePathParams;
}


export class GetAddressUnconfirmedBalanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAddressUnconfirmedBalanceResponse?: number;
}
