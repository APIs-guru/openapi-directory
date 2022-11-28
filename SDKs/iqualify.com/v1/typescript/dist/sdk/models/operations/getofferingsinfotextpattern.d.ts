import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOfferingsInfoTextPatternPathParams extends SpeakeasyBase {
    textPattern: string;
}
export declare class GetOfferingsInfoTextPatternRequest extends SpeakeasyBase {
    pathParams: GetOfferingsInfoTextPatternPathParams;
}
export declare class GetOfferingsInfoTextPatternResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    portfolioActivations?: shared.PortfolioActivations[];
    statusCode: number;
}
