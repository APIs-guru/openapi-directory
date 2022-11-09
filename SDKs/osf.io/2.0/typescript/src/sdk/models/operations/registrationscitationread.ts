import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistrationsCitationReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=citation_id" })
  citationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=registration_id" })
  registrationId: string;
}


export class RegistrationsCitationReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistrationsCitationReadPathParams;
}


export class RegistrationsCitationReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
