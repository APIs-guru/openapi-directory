import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetKvPairsByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetKvPairsByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetKvPairsByIdPathParams;
}


export class GetKvPairsByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  keyValuePair?: shared.KeyValuePair;

  @Metadata()
  statusCode: number;
}
