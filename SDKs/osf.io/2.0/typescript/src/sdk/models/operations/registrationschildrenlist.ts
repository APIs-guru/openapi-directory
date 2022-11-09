import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistrationsChildrenListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registration_id" })
  registrationId: string;
}


export class RegistrationsChildrenListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistrationsChildrenListPathParams;
}


export class RegistrationsChildrenListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
