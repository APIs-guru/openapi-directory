import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostPortfolioHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostPortfolioRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  portfolioRequest?: shared.PortfolioRequest;

  @Metadata({ data: "request, media_type=application/json" })
  portfolioRequest1?: shared.PortfolioRequest;

  @Metadata({ data: "request, media_type=text/json" })
  portfolioRequest2?: shared.PortfolioRequest;
}


export class PostPortfolioRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostPortfolioHeaders;

  @Metadata()
  request?: PostPortfolioRequests;
}


export class PostPortfolioResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PortfolioModel })
  portfolioModels?: shared.PortfolioModel[];

  @Metadata()
  statusCode: number;
}
