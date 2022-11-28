import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetParentalRatingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetParentalRatingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetParentalRatingsSecurity;
}


export class GetParentalRatingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ParentalRating })
  parentalRatings?: shared.ParentalRating[];

  @SpeakeasyMetadata()
  statusCode: number;
}
