import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SignedUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiresAt" })
  expiresAt: Date;

  @Metadata({ data: "json, name=extension" })
  extension: string;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=size" })
  size: number;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
