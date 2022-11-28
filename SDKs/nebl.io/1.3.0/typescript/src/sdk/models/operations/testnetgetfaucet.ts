import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TestnetGetFaucetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=address" })
  address: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amount" })
  amount?: number;
}


export class TestnetGetFaucetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TestnetGetFaucetQueryParams;
}


export class TestnetGetFaucetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getFaucetResponse?: shared.GetFaucetResponse;
}
