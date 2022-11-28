import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPortfolioXyzHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostPortfolioXyzRequests extends SpeakeasyBase {
    portfolioRequest?: shared.PortfolioRequest;
    portfolioRequest1?: shared.PortfolioRequest;
    portfolioRequest2?: shared.PortfolioRequest;
}
export declare class PostPortfolioXyzRequest extends SpeakeasyBase {
    headers: PostPortfolioXyzHeaders;
    request?: PostPortfolioXyzRequests;
}
export declare class PostPortfolioXyzResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    portfolioXyzModels?: shared.PortfolioXyzModel[];
    statusCode: number;
}
