import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteConsumerV1CustomersSubscriptionsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteConsumerV1CustomersSubscriptionsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteConsumerV1CustomersSubscriptionsIdPathParams;
}


export class DeleteConsumerV1CustomersSubscriptionsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
