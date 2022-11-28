import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSetupV1ResourcesIdAvailabilityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1ResourcesIdAvailabilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSetupV1ResourcesIdAvailabilityPathParams;
}


export class GetSetupV1ResourcesIdAvailabilityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceAvailabilityViewModel?: shared.ResourceAvailabilityViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
