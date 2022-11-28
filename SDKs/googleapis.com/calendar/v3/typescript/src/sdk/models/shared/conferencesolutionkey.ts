import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConferenceSolutionKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
