import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistrationsViewOnlyLinksReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=link_id" })
  linkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registration_id" })
  registrationId: string;
}


export class RegistrationsViewOnlyLinksReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistrationsViewOnlyLinksReadPathParams;
}


export class RegistrationsViewOnlyLinksReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
