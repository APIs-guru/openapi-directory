import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistrationsProvidersListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registration_id" })
  registrationId: string;
}


export class RegistrationsProvidersListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistrationsProvidersListPathParams;
}


export class RegistrationsProvidersListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
