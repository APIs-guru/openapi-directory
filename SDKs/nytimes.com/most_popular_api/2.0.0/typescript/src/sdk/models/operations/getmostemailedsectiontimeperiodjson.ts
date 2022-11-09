import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMostemailedSectionTimePeriodJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=section" })
  section: shared.SectionEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=time-period" })
  timePeriod: shared.TimePeriodEnum;
}


export class GetMostemailedSectionTimePeriodJsonSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetMostemailedSectionTimePeriodJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMostemailedSectionTimePeriodJsonPathParams;

  @Metadata()
  security: GetMostemailedSectionTimePeriodJsonSecurity;
}


export class GetMostemailedSectionTimePeriodJson200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=num_results" })
  numResults?: number;

  @Metadata({ data: "json, name=results", elemType: shared.ArticleWithCountType })
  results?: shared.ArticleWithCountType[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetMostemailedSectionTimePeriodJson400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=errors" })
  errors?: string[];

  @Metadata({ data: "json, name=results" })
  results?: any[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class GetMostemailedSectionTimePeriodJsonResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getMostemailedSectionTimePeriodJson200ApplicationJsonObject?: GetMostemailedSectionTimePeriodJson200ApplicationJson;

  @Metadata()
  getMostemailedSectionTimePeriodJson400ApplicationJsonObject?: GetMostemailedSectionTimePeriodJson400ApplicationJson;

  @Metadata()
  getMostemailedSectionTimePeriodJson403ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
