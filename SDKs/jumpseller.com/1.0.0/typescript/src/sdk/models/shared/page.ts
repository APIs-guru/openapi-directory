import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PageFields } from "./pagefields";


export class Page extends SpeakeasyBase {
  @Metadata({ data: "json, name=page" })
  page?: PageFields;
}
