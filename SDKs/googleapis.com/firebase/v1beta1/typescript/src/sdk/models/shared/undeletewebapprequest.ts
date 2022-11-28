import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UndeleteWebAppRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
