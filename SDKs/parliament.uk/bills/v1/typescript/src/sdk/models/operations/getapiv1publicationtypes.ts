import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1PublicationTypesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Take" })
  take?: number;
}


export class GetApiV1PublicationTypesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiV1PublicationTypesQueryParams;
}


export class GetApiV1PublicationTypesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  publicationTypeSearchResult?: shared.PublicationTypeSearchResult;

  @Metadata()
  statusCode: number;
}
