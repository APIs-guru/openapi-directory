import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteConsumerV1CustomersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteConsumerV1CustomersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteConsumerV1CustomersIdPathParams;
}


export class DeleteConsumerV1CustomersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
