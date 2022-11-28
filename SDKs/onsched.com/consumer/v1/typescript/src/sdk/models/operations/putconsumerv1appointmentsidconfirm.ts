import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutConsumerV1AppointmentsIdConfirmPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutConsumerV1AppointmentsIdConfirmQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=undo" })
  undo?: boolean;
}


export class PutConsumerV1AppointmentsIdConfirmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutConsumerV1AppointmentsIdConfirmPathParams;

  @SpeakeasyMetadata()
  queryParams: PutConsumerV1AppointmentsIdConfirmQueryParams;
}


export class PutConsumerV1AppointmentsIdConfirmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
