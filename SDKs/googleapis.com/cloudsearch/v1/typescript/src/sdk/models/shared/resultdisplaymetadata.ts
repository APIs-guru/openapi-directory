import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResultDisplayLine } from "./resultdisplayline";


export class ResultDisplayMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=metalines", elemType: shared.ResultDisplayLine })
  metalines?: ResultDisplayLine[];

  @Metadata({ data: "json, name=objectTypeLabel" })
  objectTypeLabel?: string;
}
