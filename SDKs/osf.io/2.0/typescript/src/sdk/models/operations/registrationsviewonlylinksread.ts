import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistrationsViewOnlyLinksReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=link_id" })
  linkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=registration_id" })
  registrationId: string;
}


export class RegistrationsViewOnlyLinksReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistrationsViewOnlyLinksReadPathParams;
}


export class RegistrationsViewOnlyLinksReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
