import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PageFields } from "./pagefields";



export class Page extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: PageFields;
}
