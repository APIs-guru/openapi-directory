import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Post } from "./post";


export class Chamber extends SpeakeasyBase {
  @Metadata({ data: "json, name=classification" })
  classification: string;

  @Metadata({ data: "json, name=districts", elemType: shared.Post })
  districts?: Post[];

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
