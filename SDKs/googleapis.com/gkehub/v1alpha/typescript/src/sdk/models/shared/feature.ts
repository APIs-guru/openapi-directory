import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MembershipFeatureSpec } from "./membershipfeaturespec";
import { MembershipFeatureState } from "./membershipfeaturestate";
import { FeatureResourceState } from "./featureresourcestate";
import { ScopeFeatureState } from "./scopefeaturestate";
import { CommonFeatureSpec } from "./commonfeaturespec";
import { CommonFeatureState } from "./commonfeaturestate";
import { MembershipFeatureSpecInput } from "./membershipfeaturespec";
import { CommonFeatureState1 } from "./commonfeaturestate1";



// Feature
/** 
 * Feature represents the settings and status of any Hub Feature.
**/
export class Feature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=membershipSpecs", elemType: MembershipFeatureSpec })
  membershipSpecs?: Map<string, MembershipFeatureSpec>;

  @SpeakeasyMetadata({ data: "json, name=membershipStates", elemType: MembershipFeatureState })
  membershipStates?: Map<string, MembershipFeatureState>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceState" })
  resourceState?: FeatureResourceState;

  @SpeakeasyMetadata({ data: "json, name=scopeSpecs" })
  scopeSpecs?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata({ data: "json, name=scopeStates", elemType: ScopeFeatureState })
  scopeStates?: Map<string, ScopeFeatureState>;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: CommonFeatureSpec;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: CommonFeatureState;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// FeatureInput
/** 
 * Feature represents the settings and status of any Hub Feature.
**/
export class FeatureInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=membershipSpecs", elemType: MembershipFeatureSpecInput })
  membershipSpecs?: Map<string, MembershipFeatureSpecInput>;

  @SpeakeasyMetadata({ data: "json, name=resourceState" })
  resourceState?: FeatureResourceState;

  @SpeakeasyMetadata({ data: "json, name=scopeSpecs" })
  scopeSpecs?: Map<string, Map<string, any>>;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: CommonFeatureSpec;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: CommonFeatureState1;
}
