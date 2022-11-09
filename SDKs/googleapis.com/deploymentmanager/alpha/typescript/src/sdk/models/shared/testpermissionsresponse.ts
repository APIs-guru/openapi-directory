import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TestPermissionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=permissions" })
  permissions?: string[];
}
