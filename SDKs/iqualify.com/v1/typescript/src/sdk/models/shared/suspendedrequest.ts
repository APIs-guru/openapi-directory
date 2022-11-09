import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SuspendedRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=suspended" })
  suspended?: boolean;
}
