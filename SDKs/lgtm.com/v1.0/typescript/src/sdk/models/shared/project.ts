import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Project extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=url-identifier" })
  urlIdentifier?: string;
}
