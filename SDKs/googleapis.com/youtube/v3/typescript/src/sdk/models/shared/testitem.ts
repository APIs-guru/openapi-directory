import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TestItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=featuredPart" })
  featuredPart?: boolean;

  @Metadata({ data: "json, name=gaia" })
  gaia?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=snippet" })
  snippet?: Map<string, any>;
}
