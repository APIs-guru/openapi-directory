import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomAttribute } from "./customattribute";


export class CustomGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.CustomAttribute })
  attributes?: CustomAttribute[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}
