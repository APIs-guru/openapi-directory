import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1ResourcesIdAvailabilityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1ResourcesIdAvailabilityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1ResourcesIdAvailabilityPathParams;
}


export class GetSetupV1ResourcesIdAvailabilityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceAvailabilityViewModel?: shared.ResourceAvailabilityViewModel;

  @Metadata()
  statusCode: number;
}
