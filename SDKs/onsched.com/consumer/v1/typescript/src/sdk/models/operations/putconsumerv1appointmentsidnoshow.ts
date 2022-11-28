import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutConsumerV1AppointmentsIdNoshowPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutConsumerV1AppointmentsIdNoshowRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  appointmentNoShowModel?: Map<string, any>;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  appointmentNoShowModel1?: Map<string, any>;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  appointmentNoShowModel2?: Map<string, any>;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  appointmentNoShowModel3?: Map<string, any>;
}


export class PutConsumerV1AppointmentsIdNoshowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutConsumerV1AppointmentsIdNoshowPathParams;

  @SpeakeasyMetadata()
  request?: PutConsumerV1AppointmentsIdNoshowRequests;
}


export class PutConsumerV1AppointmentsIdNoshowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
