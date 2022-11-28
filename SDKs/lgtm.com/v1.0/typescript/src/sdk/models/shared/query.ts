import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryProperties } from "./queryproperties";



export class Query extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pack" })
  pack?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: QueryProperties;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
