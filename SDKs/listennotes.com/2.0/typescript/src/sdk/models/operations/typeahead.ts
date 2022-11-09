import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TypeaheadQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=safe_mode" })
  safeMode?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=show_genres" })
  showGenres?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=show_podcasts" })
  showPodcasts?: number;
}


export class TypeaheadHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-ListenAPI-Key" })
  xListenApiKey: string;
}


export class TypeaheadRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TypeaheadQueryParams;

  @Metadata()
  headers: TypeaheadHeaders;
}


export class TypeaheadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  typeaheadResponse?: shared.TypeaheadResponse;
}
