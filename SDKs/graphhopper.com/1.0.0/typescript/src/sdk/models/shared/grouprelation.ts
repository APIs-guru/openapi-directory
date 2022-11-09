import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GroupRelation extends SpeakeasyBase {
  @Metadata({ data: "json, name=groups" })
  groups: string[];

  @Metadata({ data: "json, name=type" })
  type: string;
}
