import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostPortfolioAbcHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostPortfolioAbcRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  portfolioRequest?: shared.PortfolioRequest;

  @Metadata({ data: "request, media_type=application/json" })
  portfolioRequest1?: shared.PortfolioRequest;

  @Metadata({ data: "request, media_type=text/json" })
  portfolioRequest2?: shared.PortfolioRequest;
}


export class PostPortfolioAbcRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostPortfolioAbcHeaders;

  @Metadata()
  request?: PostPortfolioAbcRequests;
}


export class PostPortfolioAbcResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PortfolioAbcModel })
  portfolioAbcModels?: shared.PortfolioAbcModel[];

  @Metadata()
  statusCode: number;
}
