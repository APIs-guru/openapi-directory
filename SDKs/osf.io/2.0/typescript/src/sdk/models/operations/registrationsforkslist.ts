import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistrationsForksListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registration_id" })
  registrationId: string;
}


export class RegistrationsForksListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistrationsForksListPathParams;
}


export class RegistrationsForksListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
