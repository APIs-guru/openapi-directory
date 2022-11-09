import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LicenseeDaily extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}
