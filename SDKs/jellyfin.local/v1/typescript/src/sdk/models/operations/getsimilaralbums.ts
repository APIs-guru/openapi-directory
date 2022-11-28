import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSimilarAlbumsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetSimilarAlbumsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeArtistIds" })
  excludeArtistIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: shared.ItemFieldsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetSimilarAlbumsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetSimilarAlbumsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSimilarAlbumsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSimilarAlbumsQueryParams;

  @SpeakeasyMetadata()
  security: GetSimilarAlbumsSecurity;
}


export class GetSimilarAlbumsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
