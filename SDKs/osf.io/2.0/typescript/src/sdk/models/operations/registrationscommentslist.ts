import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistrationsCommentsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registration_id" })
  registrationId: string;
}


export class RegistrationsCommentsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistrationsCommentsListPathParams;
}


export class RegistrationsCommentsListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
