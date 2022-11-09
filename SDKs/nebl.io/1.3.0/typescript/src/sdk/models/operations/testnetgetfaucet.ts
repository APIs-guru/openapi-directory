import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TestnetGetFaucetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=address" })
  address: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=amount" })
  amount?: number;
}


export class TestnetGetFaucetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TestnetGetFaucetQueryParams;
}


export class TestnetGetFaucetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getFaucetResponse?: shared.GetFaucetResponse;
}
