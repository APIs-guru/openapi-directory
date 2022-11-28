import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOfferingsInfoTextPatternPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=textPattern" })
  textPattern: string;
}


export class GetOfferingsInfoTextPatternRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOfferingsInfoTextPatternPathParams;
}


export class GetOfferingsInfoTextPatternResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata({ elemType: shared.PortfolioActivations })
  portfolioActivations?: shared.PortfolioActivations[];

  @SpeakeasyMetadata()
  statusCode: number;
}
