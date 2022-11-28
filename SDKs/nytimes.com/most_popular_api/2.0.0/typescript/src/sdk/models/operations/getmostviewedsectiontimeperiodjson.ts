import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMostviewedSectionTimePeriodJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=section" })
  section: shared.SectionEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=time-period" })
  timePeriod: shared.TimePeriodEnum;
}


export class GetMostviewedSectionTimePeriodJsonSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetMostviewedSectionTimePeriodJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=num_results" })
  numResults?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Article })
  results?: shared.Article[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class GetMostviewedSectionTimePeriodJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMostviewedSectionTimePeriodJsonPathParams;

  @SpeakeasyMetadata()
  security: GetMostviewedSectionTimePeriodJsonSecurity;
}


export class GetMostviewedSectionTimePeriodJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getMostviewedSectionTimePeriodJson200ApplicationJsonObject?: GetMostviewedSectionTimePeriodJson200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
