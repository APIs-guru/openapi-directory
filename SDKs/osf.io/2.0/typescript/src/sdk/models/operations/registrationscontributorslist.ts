import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistrationsContributorsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registration_id" })
  registrationId: string;
}


export class RegistrationsContributorsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistrationsContributorsListPathParams;
}


export class RegistrationsContributorsListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
