import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutConsumerV1AppointmentsIdNoshowPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutConsumerV1AppointmentsIdNoshowRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  appointmentNoShowModel?: Map<string, any>;

  @Metadata({ data: "request, media_type=application/json" })
  appointmentNoShowModel1?: Map<string, any>;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  appointmentNoShowModel2?: Map<string, any>;

  @Metadata({ data: "request, media_type=text/json" })
  appointmentNoShowModel3?: Map<string, any>;
}


export class PutConsumerV1AppointmentsIdNoshowRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutConsumerV1AppointmentsIdNoshowPathParams;

  @Metadata()
  request?: PutConsumerV1AppointmentsIdNoshowRequests;
}


export class PutConsumerV1AppointmentsIdNoshowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
