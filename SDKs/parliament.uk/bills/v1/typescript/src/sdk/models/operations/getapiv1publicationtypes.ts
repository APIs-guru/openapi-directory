import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1PublicationTypesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Take" })
  take?: number;
}


export class GetApiV1PublicationTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiV1PublicationTypesQueryParams;
}


export class GetApiV1PublicationTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  publicationTypeSearchResult?: shared.PublicationTypeSearchResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
