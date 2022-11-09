import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistrationsFilesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=registration_id" })
  registrationId: string;
}


export class RegistrationsFilesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistrationsFilesListPathParams;
}


export class RegistrationsFilesListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
