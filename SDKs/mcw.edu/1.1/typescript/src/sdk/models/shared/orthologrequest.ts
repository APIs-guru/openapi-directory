import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrthologRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=rgdIds" })
  rgdIds?: number[];

  @Metadata({ data: "json, name=speciesTypeKeys" })
  speciesTypeKeys?: number[];
}
