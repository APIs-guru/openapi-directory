import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShaCertificate } from "./shacertificate";



export class ListShaCertificatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificates", elemType: ShaCertificate })
  certificates?: ShaCertificate[];
}
