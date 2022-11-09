import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TestnetGetAddressUtxosPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class TestnetGetAddressUtxosRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TestnetGetAddressUtxosPathParams;
}


export class TestnetGetAddressUtxosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.GetAddressUtxosResponse })
  getAddressUtxosResponse?: shared.GetAddressUtxosResponse[];
}
