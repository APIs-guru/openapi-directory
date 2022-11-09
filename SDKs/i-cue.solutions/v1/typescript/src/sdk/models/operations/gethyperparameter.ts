import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetHyperparameterHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class GetHyperparameterRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetHyperparameterHeaders;
}


export class GetHyperparameterResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  hyperparameterModel?: shared.HyperparameterModel;

  @Metadata()
  statusCode: number;
}
