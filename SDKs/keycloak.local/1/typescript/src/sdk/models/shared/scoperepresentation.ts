import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PolicyRepresentation } from "./policyrepresentation";
import { ResourceRepresentation } from "./resourcerepresentation";


export class ScopeRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=iconUri" })
  iconUri?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=policies", elemType: shared.PolicyRepresentation })
  policies?: PolicyRepresentation[];

  @Metadata({ data: "json, name=resources", elemType: shared.ResourceRepresentation })
  resources?: ResourceRepresentation[];
}
