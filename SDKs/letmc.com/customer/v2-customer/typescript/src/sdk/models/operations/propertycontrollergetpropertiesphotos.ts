import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PropertyControllerGetPropertiesPhotosPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=propertyID" })
  propertyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class PropertyControllerGetPropertiesPhotosQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class PropertyControllerGetPropertiesPhotosRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PropertyControllerGetPropertiesPhotosPathParams;

  @Metadata()
  queryParams: PropertyControllerGetPropertiesPhotosQueryParams;
}


export class PropertyControllerGetPropertiesPhotosResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  landlordPhotoModelResults?: shared.LandlordPhotoModelResults;

  @Metadata()
  statusCode: number;
}
