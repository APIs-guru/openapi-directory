import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class JurisdictionDetailJurisdictionsJurisdictionIdGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jurisdiction_id" })
  jurisdictionId: string;
}


export class JurisdictionDetailJurisdictionsJurisdictionIdGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apikey" })
  apikey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: shared.JurisdictionIncludeEnum[];
}


export class JurisdictionDetailJurisdictionsJurisdictionIdGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;
}


export class JurisdictionDetailJurisdictionsJurisdictionIdGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: JurisdictionDetailJurisdictionsJurisdictionIdGetPathParams;

  @SpeakeasyMetadata()
  queryParams: JurisdictionDetailJurisdictionsJurisdictionIdGetQueryParams;

  @SpeakeasyMetadata()
  headers: JurisdictionDetailJurisdictionsJurisdictionIdGetHeaders;
}


export class JurisdictionDetailJurisdictionsJurisdictionIdGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  jurisdiction?: shared.Jurisdiction;

  @SpeakeasyMetadata()
  statusCode: number;
}
