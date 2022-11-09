import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ShaCertificate } from "./shacertificate";


export class ListShaCertificatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificates", elemType: shared.ShaCertificate })
  certificates?: ShaCertificate[];
}
