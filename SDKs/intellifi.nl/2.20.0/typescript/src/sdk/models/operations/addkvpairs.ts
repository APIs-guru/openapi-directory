import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddKvPairsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.KeyValuePair;
}


export class AddKvPairsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  responseDefaultResource?: shared.ResponseDefaultResource;

  @Metadata()
  statusCode: number;
}
