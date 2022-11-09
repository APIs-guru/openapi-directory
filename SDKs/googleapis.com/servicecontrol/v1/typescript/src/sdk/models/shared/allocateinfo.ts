import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AllocateInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=unusedArguments" })
  unusedArguments?: string[];
}
