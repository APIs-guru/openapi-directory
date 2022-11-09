import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersUserEmailOfferingsOfferingIdProgressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class GetUsersUserEmailOfferingsOfferingIdProgressRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersUserEmailOfferingsOfferingIdProgressPathParams;
}


export class GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=completion" })
  completion?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;
}


export class GetUsersUserEmailOfferingsOfferingIdProgressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  getUsersUserEmailOfferingsOfferingIdProgress200ApplicationJsonObject?: GetUsersUserEmailOfferingsOfferingIdProgress200ApplicationJson;

  @Metadata()
  statusCode: number;
}
