import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NextPage } from "./nextpage";



export class ForwardPaging extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: NextPage;
}
