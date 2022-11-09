import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMostsharedSectionTimePeriodJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=section" })
  section: shared.SectionEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=time-period" })
  timePeriod: shared.TimePeriodEnum;
}


export class GetMostsharedSectionTimePeriodJsonSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetMostsharedSectionTimePeriodJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMostsharedSectionTimePeriodJsonPathParams;

  @Metadata()
  security: GetMostsharedSectionTimePeriodJsonSecurity;
}


export class GetMostsharedSectionTimePeriodJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=num_results" })
  numResults?: number;

  @Metadata({ data: "json, name=results", elemType: shared.Article })
  results?: shared.Article[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetMostsharedSectionTimePeriodJson400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=errors" })
  errors?: string[];

  @Metadata({ data: "json, name=results" })
  results?: any[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetMostsharedSectionTimePeriodJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getMostsharedSectionTimePeriodJson200ApplicationJsonObject?: GetMostsharedSectionTimePeriodJson200ApplicationJson;

  @Metadata()
  getMostsharedSectionTimePeriodJson400ApplicationJsonObject?: GetMostsharedSectionTimePeriodJson400ApplicationJson;

  @Metadata()
  statusCode: number;
}
