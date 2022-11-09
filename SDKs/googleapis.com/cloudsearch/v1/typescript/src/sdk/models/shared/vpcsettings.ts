import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VpcSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=project" })
  project?: string;
}
