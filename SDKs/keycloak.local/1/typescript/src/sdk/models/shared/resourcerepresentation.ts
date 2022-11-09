import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScopeRepresentation } from "./scoperepresentation";


export class ResourceRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=icon_uri" })
  iconUri?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ownerManagedAccess" })
  ownerManagedAccess?: boolean;

  @Metadata({ data: "json, name=scopes", elemType: shared.ScopeRepresentation })
  scopes?: ScopeRepresentation[];

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=uris" })
  uris?: string[];
}
