import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1LocationsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1LocationsIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=removeRegion" })
  removeRegion?: boolean;
}


export class PutSetupV1LocationsIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  locationUpdateModel?: shared.LocationUpdateModel;

  @Metadata({ data: "request, media_type=application/json" })
  locationUpdateModel1?: shared.LocationUpdateModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  locationUpdateModel2?: shared.LocationUpdateModel;

  @Metadata({ data: "request, media_type=text/json" })
  locationUpdateModel3?: shared.LocationUpdateModel;
}


export class PutSetupV1LocationsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSetupV1LocationsIdPathParams;

  @Metadata()
  queryParams: PutSetupV1LocationsIdQueryParams;

  @Metadata()
  request?: PutSetupV1LocationsIdRequests;
}


export class PutSetupV1LocationsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  locationViewModel?: shared.LocationViewModel;

  @Metadata()
  statusCode: number;
}
