import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeysMetadataRepresentationKeyMetadataRepresentation } from "./keysmetadatarepresentationkeymetadatarepresentation";



export class KeysMetadataRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=keys", elemType: KeysMetadataRepresentationKeyMetadataRepresentation })
  keys?: KeysMetadataRepresentationKeyMetadataRepresentation[];
}
