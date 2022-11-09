import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAddressUtxosPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class GetAddressUtxosRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAddressUtxosPathParams;
}


export class GetAddressUtxosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.GetAddressUtxosResponse })
  getAddressUtxosResponse?: shared.GetAddressUtxosResponse[];
}
