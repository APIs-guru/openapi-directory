import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMostsharedSectionTimePeriodJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=section" })
  section: shared.SectionEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=time-period" })
  timePeriod: shared.TimePeriodEnum;
}


export class GetMostsharedSectionTimePeriodJsonSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetMostsharedSectionTimePeriodJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=num_results" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Article })
  results?: shared.Article[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetMostsharedSectionTimePeriodJson400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: string[];

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: any[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetMostsharedSectionTimePeriodJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMostsharedSectionTimePeriodJsonPathParams;

  @SpeakeasyMetadata()
  security: GetMostsharedSectionTimePeriodJsonSecurity;
}


export class GetMostsharedSectionTimePeriodJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getMostsharedSectionTimePeriodJson200ApplicationJsonObject?: GetMostsharedSectionTimePeriodJson200ApplicationJson;

  @SpeakeasyMetadata()
  getMostsharedSectionTimePeriodJson400ApplicationJsonObject?: GetMostsharedSectionTimePeriodJson400ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
