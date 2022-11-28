import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BaggageTripAndContactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=searchID" })
  searchId: string;
}


export class BaggageTripAndContactHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class BaggageTripAndContactSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class BaggageTripAndContactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BaggageTripAndContactPathParams;

  @SpeakeasyMetadata()
  headers: BaggageTripAndContactHeaders;

  @SpeakeasyMetadata()
  security: BaggageTripAndContactSecurity;
}


export class BaggageTripAndContactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  baggageTripAndContact200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
