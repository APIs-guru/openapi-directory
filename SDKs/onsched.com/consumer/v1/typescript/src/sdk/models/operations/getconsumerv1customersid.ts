import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConsumerV1CustomersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetConsumerV1CustomersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConsumerV1CustomersIdPathParams;
}


export class GetConsumerV1CustomersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customerViewModel?: shared.CustomerViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
