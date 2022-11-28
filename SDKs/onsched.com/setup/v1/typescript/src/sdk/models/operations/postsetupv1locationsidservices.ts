import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1LocationsIdServicesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1LocationsIdServicesRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  strings?: string[];

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  strings1?: string[];

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  strings2?: string[];

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  strings3?: string[];
}


export class PostSetupV1LocationsIdServicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSetupV1LocationsIdServicesPathParams;

  @SpeakeasyMetadata()
  request?: PostSetupV1LocationsIdServicesRequests;
}


export class PostSetupV1LocationsIdServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  locationViewModel?: shared.LocationViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
