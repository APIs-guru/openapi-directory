import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteOfferingsOfferingIdUsersUserEmailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class DeleteOfferingsOfferingIdUsersUserEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteOfferingsOfferingIdUsersUserEmailPathParams;
}


export class DeleteOfferingsOfferingIdUsersUserEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
