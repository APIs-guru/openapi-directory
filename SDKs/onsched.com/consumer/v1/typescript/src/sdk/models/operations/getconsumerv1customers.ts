import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConsumerV1CustomersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupId" })
  groupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lastname" })
  lastname?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetConsumerV1CustomersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetConsumerV1CustomersQueryParams;
}


export class GetConsumerV1CustomersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customerListViewModel?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
