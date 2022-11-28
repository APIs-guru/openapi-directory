import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TestnetGetAddressUtxosPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class TestnetGetAddressUtxosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TestnetGetAddressUtxosPathParams;
}


export class TestnetGetAddressUtxosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.GetAddressUtxosResponse })
  getAddressUtxosResponse?: shared.GetAddressUtxosResponse[];
}
