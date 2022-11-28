import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostHyperparameterHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostHyperparameterRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  hyperparameterModel?: shared.HyperparameterModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  hyperparameterModel1?: shared.HyperparameterModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  hyperparameterModel2?: shared.HyperparameterModel;
}


export class PostHyperparameterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostHyperparameterHeaders;

  @SpeakeasyMetadata()
  request?: PostHyperparameterRequests;
}


export class PostHyperparameterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
