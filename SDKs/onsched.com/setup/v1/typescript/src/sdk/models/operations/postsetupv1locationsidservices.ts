import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1LocationsIdServicesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1LocationsIdServicesRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  strings?: string[];

  @Metadata({ data: "request, media_type=application/json" })
  strings1?: string[];

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  strings2?: string[];

  @Metadata({ data: "request, media_type=text/json" })
  strings3?: string[];
}


export class PostSetupV1LocationsIdServicesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSetupV1LocationsIdServicesPathParams;

  @Metadata()
  request?: PostSetupV1LocationsIdServicesRequests;
}


export class PostSetupV1LocationsIdServicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  locationViewModel?: shared.LocationViewModel;

  @Metadata()
  statusCode: number;
}
