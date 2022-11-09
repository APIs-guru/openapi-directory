import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistrationsIdentifiersListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registration_id" })
  registrationId: string;
}


export class RegistrationsIdentifiersListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistrationsIdentifiersListPathParams;
}


export class RegistrationsIdentifiersListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
