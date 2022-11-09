import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReportPerformanceSkuRationalizationPlanningLevelIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=planningLevelId" })
  planningLevelId: number;
}


export class GetReportPerformanceSkuRationalizationPlanningLevelIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class GetReportPerformanceSkuRationalizationPlanningLevelIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetReportPerformanceSkuRationalizationPlanningLevelIdPathParams;

  @Metadata()
  headers: GetReportPerformanceSkuRationalizationPlanningLevelIdHeaders;
}


export class GetReportPerformanceSkuRationalizationPlanningLevelIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PortfolioModel })
  portfolioModels?: shared.PortfolioModel[];

  @Metadata()
  statusCode: number;
}
