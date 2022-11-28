import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersUserEmailOfferingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class GetUsersUserEmailOfferingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersUserEmailOfferingsPathParams;
}


export class GetUsersUserEmailOfferingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata({ elemType: shared.OfferingMetadataResponse })
  offeringMetadataResponses?: shared.OfferingMetadataResponse[];

  @SpeakeasyMetadata()
  statusCode: number;
}
