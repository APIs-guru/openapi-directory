import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Application extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detailsUrl" })
  detailsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
