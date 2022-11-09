import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NextPage } from "./nextpage";
import { PreviousPage } from "./previouspage";


export class Paging extends SpeakeasyBase {
  @Metadata({ data: "json, name=next" })
  next?: NextPage;

  @Metadata({ data: "json, name=prev" })
  prev?: PreviousPage;
}
