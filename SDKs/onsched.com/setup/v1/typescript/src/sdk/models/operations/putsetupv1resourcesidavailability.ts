import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSetupV1ResourcesIdAvailabilityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ResourcesIdAvailabilityRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  availabilityInputModel?: shared.AvailabilityInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  availabilityInputModel1?: shared.AvailabilityInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  availabilityInputModel2?: shared.AvailabilityInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  availabilityInputModel3?: shared.AvailabilityInputModel;
}


export class PutSetupV1ResourcesIdAvailabilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSetupV1ResourcesIdAvailabilityPathParams;

  @SpeakeasyMetadata()
  request?: PutSetupV1ResourcesIdAvailabilityRequests;
}


export class PutSetupV1ResourcesIdAvailabilityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceAvailabilityViewModel?: shared.ResourceAvailabilityViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
