import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistrationsCitationsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registration_id" })
  registrationId: string;
}


export class RegistrationsCitationsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistrationsCitationsListPathParams;
}


export class RegistrationsCitationsListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
