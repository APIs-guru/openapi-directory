import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistrationsLinkedNodesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registration_id" })
  registrationId: string;
}


export class RegistrationsLinkedNodesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistrationsLinkedNodesListPathParams;
}


export class RegistrationsLinkedNodesListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
