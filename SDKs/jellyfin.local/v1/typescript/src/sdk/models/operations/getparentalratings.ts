import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetParentalRatingsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetParentalRatingsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetParentalRatingsSecurity;
}


export class GetParentalRatingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ParentalRating })
  parentalRatings?: shared.ParentalRating[];

  @Metadata()
  statusCode: number;
}
