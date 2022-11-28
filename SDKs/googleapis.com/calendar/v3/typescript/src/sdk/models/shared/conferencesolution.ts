import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConferenceSolutionKey } from "./conferencesolutionkey";



export class ConferenceSolution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iconUri" })
  iconUri?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: ConferenceSolutionKey;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
