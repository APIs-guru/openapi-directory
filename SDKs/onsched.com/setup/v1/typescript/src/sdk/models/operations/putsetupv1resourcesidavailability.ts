import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1ResourcesIdAvailabilityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1ResourcesIdAvailabilityRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  availabilityInputModel?: shared.AvailabilityInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  availabilityInputModel1?: shared.AvailabilityInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  availabilityInputModel2?: shared.AvailabilityInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  availabilityInputModel3?: shared.AvailabilityInputModel;
}


export class PutSetupV1ResourcesIdAvailabilityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSetupV1ResourcesIdAvailabilityPathParams;

  @Metadata()
  request?: PutSetupV1ResourcesIdAvailabilityRequests;
}


export class PutSetupV1ResourcesIdAvailabilityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceAvailabilityViewModel?: shared.ResourceAvailabilityViewModel;

  @Metadata()
  statusCode: number;
}
