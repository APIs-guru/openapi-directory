import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MembershipFeatureSpec } from "./membershipfeaturespec";
import { MembershipFeatureState } from "./membershipfeaturestate";
import { FeatureResourceState } from "./featureresourcestate";
import { CommonFeatureSpec } from "./commonfeaturespec";
import { CommonFeatureState } from "./commonfeaturestate";


// Feature
/** 
 * Feature represents the settings and status of any Hub Feature.
**/
export class Feature extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=membershipSpecs", elemType: shared.MembershipFeatureSpec })
  membershipSpecs?: Map<string, MembershipFeatureSpec>;

  @Metadata({ data: "json, name=membershipStates", elemType: shared.MembershipFeatureState })
  membershipStates?: Map<string, MembershipFeatureState>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resourceState" })
  resourceState?: FeatureResourceState;

  @Metadata({ data: "json, name=spec" })
  spec?: CommonFeatureSpec;

  @Metadata({ data: "json, name=state" })
  state?: CommonFeatureState;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
