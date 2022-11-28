import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Post } from "./post";



export class Chamber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification: string;

  @SpeakeasyMetadata({ data: "json, name=districts", elemType: Post })
  districts?: Post[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
