import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchOfferingsOfferingIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class PatchOfferingsOfferingIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchOfferingsOfferingIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Offering;
}


export class PatchOfferingsOfferingIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  offeringMetadataResponse?: shared.OfferingMetadataResponse;

  @Metadata()
  statusCode: number;
}
