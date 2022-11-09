import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostHyperparameterHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostHyperparameterRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  hyperparameterModel?: shared.HyperparameterModel;

  @Metadata({ data: "request, media_type=application/json" })
  hyperparameterModel1?: shared.HyperparameterModel;

  @Metadata({ data: "request, media_type=text/json" })
  hyperparameterModel2?: shared.HyperparameterModel;
}


export class PostHyperparameterRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostHyperparameterHeaders;

  @Metadata()
  request?: PostHyperparameterRequests;
}


export class PostHyperparameterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
