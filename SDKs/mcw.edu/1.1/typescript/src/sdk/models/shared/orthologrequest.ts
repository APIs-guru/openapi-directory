import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrthologRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rgdIds" })
  rgdIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=speciesTypeKeys" })
  speciesTypeKeys?: number[];
}
