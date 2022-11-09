import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConsumerV1CustomersPlansIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetConsumerV1CustomersPlansIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConsumerV1CustomersPlansIdPathParams;
}


export class GetConsumerV1CustomersPlansIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customerPlanViewModel?: shared.CustomerPlanViewModel;

  @Metadata()
  statusCode: number;
}
