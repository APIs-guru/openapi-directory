import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VpcSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;
}
