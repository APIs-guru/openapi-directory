import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetupTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=stopOnSetupFailure" })
  stopOnSetupFailure?: boolean;

  @Metadata({ data: "json, name=tagName" })
  tagName?: string;
}
