import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConferenceSolutionKey } from "./conferencesolutionkey";


export class ConferenceSolution extends SpeakeasyBase {
  @Metadata({ data: "json, name=iconUri" })
  iconUri?: string;

  @Metadata({ data: "json, name=key" })
  key?: ConferenceSolutionKey;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
