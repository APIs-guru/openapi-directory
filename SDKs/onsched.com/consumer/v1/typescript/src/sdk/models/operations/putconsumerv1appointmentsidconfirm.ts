import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutConsumerV1AppointmentsIdConfirmPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutConsumerV1AppointmentsIdConfirmQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=undo" })
  undo?: boolean;
}


export class PutConsumerV1AppointmentsIdConfirmRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutConsumerV1AppointmentsIdConfirmPathParams;

  @Metadata()
  queryParams: PutConsumerV1AppointmentsIdConfirmQueryParams;
}


export class PutConsumerV1AppointmentsIdConfirmResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
