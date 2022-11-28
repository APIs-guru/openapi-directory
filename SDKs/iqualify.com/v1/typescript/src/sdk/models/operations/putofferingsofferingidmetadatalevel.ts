import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutOfferingsOfferingIdMetadataLevelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class PutOfferingsOfferingIdMetadataLevelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: string;
}


export class PutOfferingsOfferingIdMetadataLevelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutOfferingsOfferingIdMetadataLevelPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutOfferingsOfferingIdMetadataLevelRequestBody;
}


export class PutOfferingsOfferingIdMetadataLevelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  offeringMetadataResponse?: shared.OfferingMetadataResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
