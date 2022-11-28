import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSetupV1ServicesIdAvailabilityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ServicesIdAvailabilityRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  availabilityInputModel?: shared.AvailabilityInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  availabilityInputModel1?: shared.AvailabilityInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  availabilityInputModel2?: shared.AvailabilityInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  availabilityInputModel3?: shared.AvailabilityInputModel;
}


export class PutSetupV1ServicesIdAvailabilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSetupV1ServicesIdAvailabilityPathParams;

  @SpeakeasyMetadata()
  request?: PutSetupV1ServicesIdAvailabilityRequests;
}


export class PutSetupV1ServicesIdAvailabilityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceAvailabilityViewModel?: shared.ServiceAvailabilityViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
