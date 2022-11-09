import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TestPermissionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=permissions" })
  permissions?: string[];
}
