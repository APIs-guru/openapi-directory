import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyRepresentation } from "./policyrepresentation";
import { ResourceRepresentation } from "./resourcerepresentation";



export class ScopeRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=iconUri" })
  iconUri?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=policies", elemType: PolicyRepresentation })
  policies?: PolicyRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: ResourceRepresentation })
  resources?: ResourceRepresentation[];
}
