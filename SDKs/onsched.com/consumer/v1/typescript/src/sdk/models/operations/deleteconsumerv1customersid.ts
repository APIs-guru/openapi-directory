import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteConsumerV1CustomersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteConsumerV1CustomersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteConsumerV1CustomersIdPathParams;
}


export class DeleteConsumerV1CustomersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
