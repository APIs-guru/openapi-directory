import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Application } from "./application";



export class Embedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applications", elemType: Application })
  applications?: Application[];
}
