import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dateTimeTz" })
  dateTimeTz: Date;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=resourceId" })
  resourceId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzPathParams;
}


export class GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  planLimitListViewModel?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
