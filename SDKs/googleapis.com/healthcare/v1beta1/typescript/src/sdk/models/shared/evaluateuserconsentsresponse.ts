import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Result } from "./result";



export class EvaluateUserConsentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: Result })
  results?: Result[];
}
