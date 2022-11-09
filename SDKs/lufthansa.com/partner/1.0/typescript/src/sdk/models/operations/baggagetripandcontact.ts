import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BaggageTripAndContactPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=searchID" })
  searchId: string;
}


export class BaggageTripAndContactHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class BaggageTripAndContactSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class BaggageTripAndContactRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BaggageTripAndContactPathParams;

  @Metadata()
  headers: BaggageTripAndContactHeaders;

  @Metadata()
  security: BaggageTripAndContactSecurity;
}


export class BaggageTripAndContactResponse extends SpeakeasyBase {
  @Metadata()
  baggageTripAndContact200ApplicationJsonString?: string;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
