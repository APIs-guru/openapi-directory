import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistrationsFilesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registration_id" })
  registrationId: string;
}


export class RegistrationsFilesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistrationsFilesListPathParams;
}


export class RegistrationsFilesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
