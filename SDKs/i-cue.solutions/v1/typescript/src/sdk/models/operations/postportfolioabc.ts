import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostPortfolioAbcHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostPortfolioAbcRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  portfolioRequest?: shared.PortfolioRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  portfolioRequest1?: shared.PortfolioRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  portfolioRequest2?: shared.PortfolioRequest;
}


export class PostPortfolioAbcRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostPortfolioAbcHeaders;

  @SpeakeasyMetadata()
  request?: PostPortfolioAbcRequests;
}


export class PostPortfolioAbcResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PortfolioAbcModel })
  portfolioAbcModels?: shared.PortfolioAbcModel[];

  @SpeakeasyMetadata()
  statusCode: number;
}
