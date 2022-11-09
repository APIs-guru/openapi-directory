import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConsumerV1CustomersPlansQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=groupId" })
  groupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetConsumerV1CustomersPlansRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetConsumerV1CustomersPlansQueryParams;
}


export class GetConsumerV1CustomersPlansResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customerPlanListViewModel?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
