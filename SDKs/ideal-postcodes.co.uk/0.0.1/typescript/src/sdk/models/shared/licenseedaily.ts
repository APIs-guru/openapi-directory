import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LicenseeDaily extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}
