import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CertChain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificates" })
  certificates?: string[];
}
