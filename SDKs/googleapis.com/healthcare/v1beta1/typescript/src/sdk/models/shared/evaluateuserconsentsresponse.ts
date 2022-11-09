import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Result } from "./result";


export class EvaluateUserConsentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=results", elemType: shared.Result })
  results?: Result[];
}
