import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NextPage } from "./nextpage";
import { PreviousPage } from "./previouspage";



export class Paging extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: NextPage;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: PreviousPage;
}
