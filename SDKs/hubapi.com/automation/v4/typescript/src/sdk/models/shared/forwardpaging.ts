import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NextPage } from "./nextpage";


export class ForwardPaging extends SpeakeasyBase {
  @Metadata({ data: "json, name=next" })
  next?: NextPage;
}
