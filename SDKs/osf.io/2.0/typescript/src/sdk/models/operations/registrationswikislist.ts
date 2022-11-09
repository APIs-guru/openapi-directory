import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistrationsWikisListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registration_id" })
  registrationId: string;
}


export class RegistrationsWikisListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistrationsWikisListPathParams;
}


export class RegistrationsWikisListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
