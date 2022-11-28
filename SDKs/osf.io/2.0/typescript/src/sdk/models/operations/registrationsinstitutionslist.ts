import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistrationsInstitutionsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registration_id" })
  registrationId: string;
}


export class RegistrationsInstitutionsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistrationsInstitutionsListPathParams;
}


export class RegistrationsInstitutionsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
