import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RgdidListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rgdIds" })
  rgdIds?: number[];
}
