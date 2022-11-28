import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMostemailedSectionTimePeriodJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=section" })
  section: shared.SectionEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=time-period" })
  timePeriod: shared.TimePeriodEnum;
}


export class GetMostemailedSectionTimePeriodJsonSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetMostemailedSectionTimePeriodJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=num_results" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.ArticleWithCountType })
  results?: shared.ArticleWithCountType[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetMostemailedSectionTimePeriodJson400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: string[];

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: any[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetMostemailedSectionTimePeriodJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMostemailedSectionTimePeriodJsonPathParams;

  @SpeakeasyMetadata()
  security: GetMostemailedSectionTimePeriodJsonSecurity;
}


export class GetMostemailedSectionTimePeriodJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getMostemailedSectionTimePeriodJson200ApplicationJsonObject?: GetMostemailedSectionTimePeriodJson200ApplicationJson;

  @SpeakeasyMetadata()
  getMostemailedSectionTimePeriodJson400ApplicationJsonObject?: GetMostemailedSectionTimePeriodJson400ApplicationJson;

  @SpeakeasyMetadata()
  getMostemailedSectionTimePeriodJson403ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
