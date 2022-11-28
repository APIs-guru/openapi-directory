import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1LocationsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  locationInputModel?: shared.LocationInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  locationInputModel1?: shared.LocationInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  locationInputModel2?: shared.LocationInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  locationInputModel3?: shared.LocationInputModel;
}


export class PostSetupV1LocationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PostSetupV1LocationsRequests;
}


export class PostSetupV1LocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  locationViewModel?: shared.LocationViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
