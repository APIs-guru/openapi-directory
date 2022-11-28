import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetKvPairsByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetKvPairsByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetKvPairsByIdPathParams;
}


export class GetKvPairsByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  keyValuePair?: shared.KeyValuePair;

  @SpeakeasyMetadata()
  statusCode: number;
}
