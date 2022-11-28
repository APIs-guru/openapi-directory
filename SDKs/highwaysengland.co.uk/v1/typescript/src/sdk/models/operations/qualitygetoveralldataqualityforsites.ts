import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class QualityGetOverallDataQualityForSitesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class QualityGetOverallDataQualityForSitesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sites" })
  sites: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate: string;
}


export class QualityGetOverallDataQualityForSitesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: QualityGetOverallDataQualityForSitesPathParams;

  @SpeakeasyMetadata()
  queryParams: QualityGetOverallDataQualityForSitesQueryParams;
}


export class QualityGetOverallDataQualityForSitesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  overallQualityResponse?: shared.OverallQualityResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
