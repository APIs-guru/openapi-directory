import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @Metadata({ data: "json, name=serviceVersion" })
  serviceVersion?: string;
}
