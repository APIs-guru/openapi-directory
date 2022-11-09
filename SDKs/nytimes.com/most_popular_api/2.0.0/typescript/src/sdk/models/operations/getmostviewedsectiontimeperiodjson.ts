import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMostviewedSectionTimePeriodJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=section" })
  section: shared.SectionEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=time-period" })
  timePeriod: shared.TimePeriodEnum;
}


export class GetMostviewedSectionTimePeriodJsonSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetMostviewedSectionTimePeriodJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMostviewedSectionTimePeriodJsonPathParams;

  @Metadata()
  security: GetMostviewedSectionTimePeriodJsonSecurity;
}


export class GetMostviewedSectionTimePeriodJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=num_results" })
  numResults?: number;

  @Metadata({ data: "json, name=results", elemType: shared.Article })
  results?: shared.Article[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetMostviewedSectionTimePeriodJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getMostviewedSectionTimePeriodJson200ApplicationJsonObject?: GetMostviewedSectionTimePeriodJson200ApplicationJson;

  @Metadata()
  statusCode: number;
}
