import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Version extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiVersion" })
  apiVersion?: string;
}
