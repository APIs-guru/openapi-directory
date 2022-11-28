import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSetupV1ServicesIdAvailabilityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1ServicesIdAvailabilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSetupV1ServicesIdAvailabilityPathParams;
}


export class GetSetupV1ServicesIdAvailabilityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceAvailabilityViewModel?: shared.ServiceAvailabilityViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
