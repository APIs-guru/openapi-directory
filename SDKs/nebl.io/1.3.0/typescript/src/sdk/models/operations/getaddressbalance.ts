import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAddressBalancePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class GetAddressBalanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAddressBalancePathParams;
}


export class GetAddressBalanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAddressBalanceResponse?: number;
}
