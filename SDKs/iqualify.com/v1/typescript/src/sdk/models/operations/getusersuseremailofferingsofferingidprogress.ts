import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersUserEmailOfferingsOfferingIdProgressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completion" })
  completion?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;
}


export class GetUsersUserEmailOfferingsOfferingIdProgressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersUserEmailOfferingsOfferingIdProgressPathParams;
}


export class GetUsersUserEmailOfferingsOfferingIdProgressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  getUsersUserEmailOfferingsOfferingIdProgress200ApplicationJsonObject?: GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
