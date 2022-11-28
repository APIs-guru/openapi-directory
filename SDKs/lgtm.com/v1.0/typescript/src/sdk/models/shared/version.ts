import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Version extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiVersion" })
  apiVersion?: string;
}
