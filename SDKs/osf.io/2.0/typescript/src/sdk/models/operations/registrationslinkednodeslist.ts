import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistrationsLinkedNodesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registration_id" })
  registrationId: string;
}


export class RegistrationsLinkedNodesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistrationsLinkedNodesListPathParams;
}


export class RegistrationsLinkedNodesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
