import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistrationsFilesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=registration_id" })
  registrationId: string;
}


export class RegistrationsFilesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistrationsFilesReadPathParams;
}


export class RegistrationsFilesReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
