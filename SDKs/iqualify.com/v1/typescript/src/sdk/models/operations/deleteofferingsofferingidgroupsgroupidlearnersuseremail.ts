import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailPathParams;
}


export class DeleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
