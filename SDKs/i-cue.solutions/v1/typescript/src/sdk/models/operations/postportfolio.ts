import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostPortfolioHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostPortfolioRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  portfolioRequest?: shared.PortfolioRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  portfolioRequest1?: shared.PortfolioRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  portfolioRequest2?: shared.PortfolioRequest;
}


export class PostPortfolioRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostPortfolioHeaders;

  @SpeakeasyMetadata()
  request?: PostPortfolioRequests;
}


export class PostPortfolioResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PortfolioModel })
  portfolioModels?: shared.PortfolioModel[];

  @SpeakeasyMetadata()
  statusCode: number;
}
