import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dateTimeTz" })
  dateTimeTz: Date;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzPathParams;
}


export class GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  planLimitListViewModel?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
