import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistrationsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registration_id" })
  registrationId: string;
}


export class RegistrationsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistrationsReadPathParams;
}


export class RegistrationsReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
