import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Headers } from "./headers";
import { Row } from "./row";



export class Table extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnHeaders" })
  columnHeaders?: Headers;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rowHeaders" })
  rowHeaders?: Headers;

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: Row })
  rows?: Row[];
}
