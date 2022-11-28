import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Bookshelf } from "./bookshelf";



export class Bookshelves extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Bookshelf })
  items?: Bookshelf[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
