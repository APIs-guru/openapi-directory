import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomTemplate } from "./customtemplate";



export class ListTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=template", elemType: CustomTemplate })
  template?: CustomTemplate[];
}
