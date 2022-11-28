import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceVersion" })
  serviceVersion?: string;
}
