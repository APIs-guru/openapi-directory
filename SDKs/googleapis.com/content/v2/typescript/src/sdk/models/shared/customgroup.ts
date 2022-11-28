import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomAttribute } from "./customattribute";



export class CustomGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: CustomAttribute })
  attributes?: CustomAttribute[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
