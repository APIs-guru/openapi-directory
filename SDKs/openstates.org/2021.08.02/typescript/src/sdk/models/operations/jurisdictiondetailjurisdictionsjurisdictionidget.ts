import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class JurisdictionDetailJurisdictionsJurisdictionIdGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jurisdiction_id" })
  jurisdictionId: string;
}


export class JurisdictionDetailJurisdictionsJurisdictionIdGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=apikey" })
  apikey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: shared.JurisdictionIncludeEnum[];
}


export class JurisdictionDetailJurisdictionsJurisdictionIdGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;
}


export class JurisdictionDetailJurisdictionsJurisdictionIdGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: JurisdictionDetailJurisdictionsJurisdictionIdGetPathParams;

  @Metadata()
  queryParams: JurisdictionDetailJurisdictionsJurisdictionIdGetQueryParams;

  @Metadata()
  headers: JurisdictionDetailJurisdictionsJurisdictionIdGetHeaders;
}


export class JurisdictionDetailJurisdictionsJurisdictionIdGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  jurisdiction?: shared.Jurisdiction;

  @Metadata()
  statusCode: number;
}
