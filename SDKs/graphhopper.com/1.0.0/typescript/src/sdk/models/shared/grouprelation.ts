import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GroupRelation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groups" })
  groups: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
