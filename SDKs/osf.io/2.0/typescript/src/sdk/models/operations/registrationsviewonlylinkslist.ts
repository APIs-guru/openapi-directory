import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistrationsViewOnlyLinksListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registration_id" })
  registrationId: string;
}


export class RegistrationsViewOnlyLinksListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistrationsViewOnlyLinksListPathParams;
}


export class RegistrationsViewOnlyLinksListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
