import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomAttribute } from "./customattribute";


export class CustomAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupValues", elemType: shared.CustomAttribute })
  groupValues?: CustomAttribute[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
