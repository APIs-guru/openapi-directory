import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SuspendedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=suspended" })
  suspended?: boolean;
}
