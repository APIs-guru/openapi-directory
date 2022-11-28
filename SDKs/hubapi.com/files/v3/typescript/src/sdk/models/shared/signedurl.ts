import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SignedUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiresAt" })
  expiresAt: Date;

  @SpeakeasyMetadata({ data: "json, name=extension" })
  extension: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
