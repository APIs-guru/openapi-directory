import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOfferingsOfferingIdGroupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdGroupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOfferingsOfferingIdGroupsPathParams;
}


export class GetOfferingsOfferingIdGroupsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AssessmentGroupResponse })
  assessmentGroupResponses?: shared.AssessmentGroupResponse[];

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
