import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScopeRepresentation } from "./scoperepresentation";



export class ResourceRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=icon_uri" })
  iconUri?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerManagedAccess" })
  ownerManagedAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scopes", elemType: ScopeRepresentation })
  scopes?: ScopeRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=uris" })
  uris?: string[];
}
