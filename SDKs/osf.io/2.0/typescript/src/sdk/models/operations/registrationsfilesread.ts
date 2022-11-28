import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistrationsFilesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registration_id" })
  registrationId: string;
}


export class RegistrationsFilesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistrationsFilesReadPathParams;
}


export class RegistrationsFilesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
