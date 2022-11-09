import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistrationsContributorsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registration_id" })
  registrationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class RegistrationsContributorsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistrationsContributorsReadPathParams;
}


export class RegistrationsContributorsReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
