import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetClassificationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=naics_2017" })
  naics2017?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class GetClassifications200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classifications", elemType: shared.ClassificationV1 })
  classifications?: shared.ClassificationV1[];
}


export class GetClassifications400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorV1 })
  errors?: shared.ErrorV1[];
}


export class GetClassificationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetClassificationsQueryParams;
}


export class GetClassificationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getClassifications200ApplicationJsonObject?: GetClassifications200ApplicationJson;

  @SpeakeasyMetadata()
  getClassifications400ApplicationJsonObject?: GetClassifications400ApplicationJson;
}
