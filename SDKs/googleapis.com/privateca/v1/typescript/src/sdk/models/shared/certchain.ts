import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CertChain extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificates" })
  certificates?: string[];
}
