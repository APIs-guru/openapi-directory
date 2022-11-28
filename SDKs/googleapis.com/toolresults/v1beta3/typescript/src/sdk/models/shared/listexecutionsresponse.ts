import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Execution } from "./execution";



export class ListExecutionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executions", elemType: Execution })
  executions?: Execution[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
