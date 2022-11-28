import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAddressUtxosPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class GetAddressUtxosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAddressUtxosPathParams;
}


export class GetAddressUtxosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.GetAddressUtxosResponse })
  getAddressUtxosResponse?: shared.GetAddressUtxosResponse[];
}
