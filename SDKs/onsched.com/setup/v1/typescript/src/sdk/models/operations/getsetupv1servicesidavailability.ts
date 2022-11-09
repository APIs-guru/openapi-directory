import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1ServicesIdAvailabilityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1ServicesIdAvailabilityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1ServicesIdAvailabilityPathParams;
}


export class GetSetupV1ServicesIdAvailabilityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceAvailabilityViewModel?: shared.ServiceAvailabilityViewModel;

  @Metadata()
  statusCode: number;
}
