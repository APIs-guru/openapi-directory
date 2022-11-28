import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveWebAppRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowMissing" })
  allowMissing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=immediate" })
  immediate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
