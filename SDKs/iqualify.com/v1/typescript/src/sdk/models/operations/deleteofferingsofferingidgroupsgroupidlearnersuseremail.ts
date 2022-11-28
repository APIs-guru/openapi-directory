import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailPathParams;
}


export class DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
