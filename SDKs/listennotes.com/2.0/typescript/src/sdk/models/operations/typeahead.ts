import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TypeaheadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=safe_mode" })
  safeMode?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=show_genres" })
  showGenres?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=show_podcasts" })
  showPodcasts?: number;
}


export class TypeaheadHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class TypeaheadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TypeaheadQueryParams;

  @SpeakeasyMetadata()
  headers: TypeaheadHeaders;
}


export class TypeaheadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  typeaheadResponse?: shared.TypeaheadResponse;
}
