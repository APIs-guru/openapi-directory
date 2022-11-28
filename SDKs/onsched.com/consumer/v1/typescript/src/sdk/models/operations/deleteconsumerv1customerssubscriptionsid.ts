import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteConsumerV1CustomersSubscriptionsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteConsumerV1CustomersSubscriptionsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteConsumerV1CustomersSubscriptionsIdPathParams;
}


export class DeleteConsumerV1CustomersSubscriptionsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
