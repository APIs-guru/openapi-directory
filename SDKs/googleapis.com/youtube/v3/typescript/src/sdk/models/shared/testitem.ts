import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TestItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=featuredPart" })
  featuredPart?: boolean;

  @SpeakeasyMetadata({ data: "json, name=gaia" })
  gaia?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: Map<string, any>;
}
