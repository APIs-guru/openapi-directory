import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetupTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stopOnSetupFailure" })
  stopOnSetupFailure?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tagName" })
  tagName?: string;
}
