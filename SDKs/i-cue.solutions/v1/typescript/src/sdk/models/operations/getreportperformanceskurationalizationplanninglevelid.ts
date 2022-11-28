import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReportPerformanceSkuRationalizationPlanningLevelIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=planningLevelId" })
  planningLevelId: number;
}


export class GetReportPerformanceSkuRationalizationPlanningLevelIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class GetReportPerformanceSkuRationalizationPlanningLevelIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetReportPerformanceSkuRationalizationPlanningLevelIdPathParams;

  @SpeakeasyMetadata()
  headers: GetReportPerformanceSkuRationalizationPlanningLevelIdHeaders;
}


export class GetReportPerformanceSkuRationalizationPlanningLevelIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PortfolioModel })
  portfolioModels?: shared.PortfolioModel[];

  @SpeakeasyMetadata()
  statusCode: number;
}
