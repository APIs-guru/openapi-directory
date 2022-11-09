import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGeocodeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=debug" })
  debug?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=point" })
  point?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=provider" })
  provider?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=reverse" })
  reverse?: boolean;
}


export class GetGeocodeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGeocodeQueryParams;
}


export class GetGeocodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ghError?: shared.GhError;

  @Metadata()
  geocodingResponse?: any;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
