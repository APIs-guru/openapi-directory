import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1ServicesIdAvailabilityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ServicesIdAvailabilityRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  availabilityInputModel?: shared.AvailabilityInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  availabilityInputModel1?: shared.AvailabilityInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  availabilityInputModel2?: shared.AvailabilityInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  availabilityInputModel3?: shared.AvailabilityInputModel;
}


export class PutSetupV1ServicesIdAvailabilityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSetupV1ServicesIdAvailabilityPathParams;

  @Metadata()
  request?: PutSetupV1ServicesIdAvailabilityRequests;
}


export class PutSetupV1ServicesIdAvailabilityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceAvailabilityViewModel?: shared.ServiceAvailabilityViewModel;

  @Metadata()
  statusCode: number;
}
