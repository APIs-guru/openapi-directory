import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetHyperparameterHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class GetHyperparameterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetHyperparameterHeaders;
}


export class GetHyperparameterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  hyperparameterModel?: shared.HyperparameterModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
