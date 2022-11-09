import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class JurisdictionListJurisdictionsGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=apikey" })
  apikey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=classification" })
  classification?: shared.JurisdictionClassificationEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: shared.JurisdictionIncludeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class JurisdictionListJurisdictionsGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;
}


export class JurisdictionListJurisdictionsGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: JurisdictionListJurisdictionsGetQueryParams;

  @Metadata()
  headers: JurisdictionListJurisdictionsGetHeaders;
}


export class JurisdictionListJurisdictionsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  jurisdictionList?: shared.JurisdictionList;

  @Metadata()
  statusCode: number;
}
