import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Sites } from "./sites";



export class SiteTypeLayer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Sites", elemType: Sites })
  sites?: Sites[];
}
