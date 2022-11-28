import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPortfolioAbcHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostPortfolioAbcRequests extends SpeakeasyBase {
    portfolioRequest?: shared.PortfolioRequest;
    portfolioRequest1?: shared.PortfolioRequest;
    portfolioRequest2?: shared.PortfolioRequest;
}
export declare class PostPortfolioAbcRequest extends SpeakeasyBase {
    headers: PostPortfolioAbcHeaders;
    request?: PostPortfolioAbcRequests;
}
export declare class PostPortfolioAbcResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    portfolioAbcModels?: shared.PortfolioAbcModel[];
    statusCode: number;
}
