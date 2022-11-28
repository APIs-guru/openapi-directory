import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUsersUserEmailOfferingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class PostUsersUserEmailOfferingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUsersUserEmailOfferingsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: string[];
}


export class PostUsersUserEmailOfferingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata({ elemType: shared.OfferingMetadataResponse })
  offeringMetadataResponses?: shared.OfferingMetadataResponse[];

  @SpeakeasyMetadata()
  statusCode: number;
}
