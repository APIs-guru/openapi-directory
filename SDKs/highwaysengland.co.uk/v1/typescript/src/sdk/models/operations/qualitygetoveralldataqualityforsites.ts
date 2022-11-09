import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class QualityGetOverallDataQualityForSitesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class QualityGetOverallDataQualityForSitesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sites" })
  sites: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}


export class QualityGetOverallDataQualityForSitesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: QualityGetOverallDataQualityForSitesPathParams;

  @Metadata()
  queryParams: QualityGetOverallDataQualityForSitesQueryParams;
}


export class QualityGetOverallDataQualityForSitesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  overallQualityResponse?: shared.OverallQualityResponse;

  @Metadata()
  statusCode: number;
}
