import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RgdidListRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=rgdIds" })
  rgdIds?: number[];
}
