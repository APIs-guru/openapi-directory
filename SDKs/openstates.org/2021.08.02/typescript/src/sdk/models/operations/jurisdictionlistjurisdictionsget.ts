import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class JurisdictionListJurisdictionsGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apikey" })
  apikey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=classification" })
  classification?: shared.JurisdictionClassificationEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: shared.JurisdictionIncludeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class JurisdictionListJurisdictionsGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;
}


export class JurisdictionListJurisdictionsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: JurisdictionListJurisdictionsGetQueryParams;

  @SpeakeasyMetadata()
  headers: JurisdictionListJurisdictionsGetHeaders;
}


export class JurisdictionListJurisdictionsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  jurisdictionList?: shared.JurisdictionList;

  @SpeakeasyMetadata()
  statusCode: number;
}
