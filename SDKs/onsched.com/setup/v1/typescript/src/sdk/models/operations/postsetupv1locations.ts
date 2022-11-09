import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1LocationsRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  locationInputModel?: shared.LocationInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  locationInputModel1?: shared.LocationInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  locationInputModel2?: shared.LocationInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  locationInputModel3?: shared.LocationInputModel;
}


export class PostSetupV1LocationsRequest extends SpeakeasyBase {
  @Metadata()
  request?: PostSetupV1LocationsRequests;
}


export class PostSetupV1LocationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  locationViewModel?: shared.LocationViewModel;

  @Metadata()
  statusCode: number;
}
