import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeysMetadataRepresentationKeyMetadataRepresentation } from "./keysmetadatarepresentationkeymetadatarepresentation";


export class KeysMetadataRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: Map<string, any>;

  @Metadata({ data: "json, name=keys", elemType: shared.KeysMetadataRepresentationKeyMetadataRepresentation })
  keys?: KeysMetadataRepresentationKeyMetadataRepresentation[];
}
