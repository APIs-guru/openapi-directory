import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOfferingsOfferingIdGroupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOfferingsOfferingIdGroupsPathParams;
}


export class GetOfferingsOfferingIdGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AssessmentGroupResponse })
  assessmentGroupResponses?: shared.AssessmentGroupResponse[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
