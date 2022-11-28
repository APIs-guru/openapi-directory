import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSetupV1LocationsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1LocationsIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=removeRegion" })
  removeRegion?: boolean;
}


export class PutSetupV1LocationsIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  locationUpdateModel?: shared.LocationUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  locationUpdateModel1?: shared.LocationUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  locationUpdateModel2?: shared.LocationUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  locationUpdateModel3?: shared.LocationUpdateModel;
}


export class PutSetupV1LocationsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSetupV1LocationsIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PutSetupV1LocationsIdQueryParams;

  @SpeakeasyMetadata()
  request?: PutSetupV1LocationsIdRequests;
}


export class PutSetupV1LocationsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  locationViewModel?: shared.LocationViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
