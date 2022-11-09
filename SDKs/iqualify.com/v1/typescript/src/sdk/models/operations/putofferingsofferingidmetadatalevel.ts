import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutOfferingsOfferingIdMetadataLevelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class PutOfferingsOfferingIdMetadataLevelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=level" })
  level?: string;
}


export class PutOfferingsOfferingIdMetadataLevelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutOfferingsOfferingIdMetadataLevelPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutOfferingsOfferingIdMetadataLevelRequestBody;
}


export class PutOfferingsOfferingIdMetadataLevelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  offeringMetadataResponse?: shared.OfferingMetadataResponse;

  @Metadata()
  statusCode: number;
}
