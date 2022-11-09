import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUsersUserEmailOfferingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class PostUsersUserEmailOfferingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostUsersUserEmailOfferingsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: string[];
}


export class PostUsersUserEmailOfferingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.OfferingMetadataResponse })
  offeringMetadataResponses?: shared.OfferingMetadataResponse[];

  @Metadata()
  statusCode: number;
}
