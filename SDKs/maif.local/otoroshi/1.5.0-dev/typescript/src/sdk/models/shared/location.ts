import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=teams" })
  teams: Map<string, string>[];

  @Metadata({ data: "json, name=tenant" })
  tenant: string;
}
