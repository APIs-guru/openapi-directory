import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostPortfolioXyzHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostPortfolioXyzRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  portfolioRequest?: shared.PortfolioRequest;

  @Metadata({ data: "request, media_type=application/json" })
  portfolioRequest1?: shared.PortfolioRequest;

  @Metadata({ data: "request, media_type=text/json" })
  portfolioRequest2?: shared.PortfolioRequest;
}


export class PostPortfolioXyzRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostPortfolioXyzHeaders;

  @Metadata()
  request?: PostPortfolioXyzRequests;
}


export class PostPortfolioXyzResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PortfolioXyzModel })
  portfolioXyzModels?: shared.PortfolioXyzModel[];

  @Metadata()
  statusCode: number;
}
