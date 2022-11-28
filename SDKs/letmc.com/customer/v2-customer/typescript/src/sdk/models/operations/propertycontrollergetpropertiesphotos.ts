import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PropertyControllerGetPropertiesPhotosPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=propertyID" })
  propertyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class PropertyControllerGetPropertiesPhotosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class PropertyControllerGetPropertiesPhotosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PropertyControllerGetPropertiesPhotosPathParams;

  @SpeakeasyMetadata()
  queryParams: PropertyControllerGetPropertiesPhotosQueryParams;
}


export class PropertyControllerGetPropertiesPhotosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  landlordPhotoModelResults?: shared.LandlordPhotoModelResults;

  @SpeakeasyMetadata()
  statusCode: number;
}
