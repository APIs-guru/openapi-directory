import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AllocateInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unusedArguments" })
  unusedArguments?: string[];
}
