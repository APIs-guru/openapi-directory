import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeardownTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=stopTeardownOnFailure" })
  stopTeardownOnFailure?: boolean;

  @Metadata({ data: "json, name=tagName" })
  tagName?: string;
}
