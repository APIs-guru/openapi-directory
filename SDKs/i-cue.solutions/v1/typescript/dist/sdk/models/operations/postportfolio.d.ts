import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPortfolioHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostPortfolioRequests extends SpeakeasyBase {
    portfolioRequest?: shared.PortfolioRequest;
    portfolioRequest1?: shared.PortfolioRequest;
    portfolioRequest2?: shared.PortfolioRequest;
}
export declare class PostPortfolioRequest extends SpeakeasyBase {
    headers: PostPortfolioHeaders;
    request?: PostPortfolioRequests;
}
export declare class PostPortfolioResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    portfolioModels?: shared.PortfolioModel[];
    statusCode: number;
}
