import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostPortfolioXyzHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostPortfolioXyzRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  portfolioRequest?: shared.PortfolioRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  portfolioRequest1?: shared.PortfolioRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  portfolioRequest2?: shared.PortfolioRequest;
}


export class PostPortfolioXyzRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostPortfolioXyzHeaders;

  @SpeakeasyMetadata()
  request?: PostPortfolioXyzRequests;
}


export class PostPortfolioXyzResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PortfolioXyzModel })
  portfolioXyzModels?: shared.PortfolioXyzModel[];

  @SpeakeasyMetadata()
  statusCode: number;
}
