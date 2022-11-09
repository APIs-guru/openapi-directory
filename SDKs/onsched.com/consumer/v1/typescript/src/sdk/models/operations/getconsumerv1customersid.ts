import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConsumerV1CustomersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetConsumerV1CustomersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConsumerV1CustomersIdPathParams;
}


export class GetConsumerV1CustomersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customerViewModel?: shared.CustomerViewModel;

  @Metadata()
  statusCode: number;
}
