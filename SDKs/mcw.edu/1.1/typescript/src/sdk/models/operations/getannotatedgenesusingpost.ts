import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAnnotatedGenesUsingPostRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.AnnotatedGeneRequest;
}


export class GetAnnotatedGenesUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
