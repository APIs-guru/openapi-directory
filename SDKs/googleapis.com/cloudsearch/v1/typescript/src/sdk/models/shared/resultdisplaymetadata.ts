import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResultDisplayLine } from "./resultdisplayline";



export class ResultDisplayMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metalines", elemType: ResultDisplayLine })
  metalines?: ResultDisplayLine[];

  @SpeakeasyMetadata({ data: "json, name=objectTypeLabel" })
  objectTypeLabel?: string;
}
