import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QueryProperties } from "./queryproperties";


export class Query extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pack" })
  pack?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: QueryProperties;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
