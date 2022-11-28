import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeardownTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stopTeardownOnFailure" })
  stopTeardownOnFailure?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tagName" })
  tagName?: string;
}
