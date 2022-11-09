import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOfferingsInfoTextPatternPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=textPattern" })
  textPattern: string;
}


export class GetOfferingsInfoTextPatternRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOfferingsInfoTextPatternPathParams;
}


export class GetOfferingsInfoTextPatternResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.PortfolioActivations })
  portfolioActivations?: shared.PortfolioActivations[];

  @Metadata()
  statusCode: number;
}
