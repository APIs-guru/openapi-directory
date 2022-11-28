import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistrationsWikisListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registration_id" })
  registrationId: string;
}


export class RegistrationsWikisListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistrationsWikisListPathParams;
}


export class RegistrationsWikisListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
