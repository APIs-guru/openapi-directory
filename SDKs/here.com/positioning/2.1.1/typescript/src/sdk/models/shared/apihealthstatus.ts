import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiHealthStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
