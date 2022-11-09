import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistrationsLogsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registration_id" })
  registrationId: string;
}


export class RegistrationsLogsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistrationsLogsListPathParams;
}


export class RegistrationsLogsListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
