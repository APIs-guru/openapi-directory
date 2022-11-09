import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MembershipFeatureSpec } from "./membershipfeaturespec";
import { MembershipFeatureState } from "./membershipfeaturestate";
import { FeatureResourceState } from "./featureresourcestate";
import { CommonFeatureSpec } from "./commonfeaturespec";
import { CommonFeatureState } from "./commonfeaturestate";
/**
 * Feature represents the settings and status of any Hub Feature.
**/
export declare class Feature extends SpeakeasyBase {
    createTime?: string;
    deleteTime?: string;
    labels?: Map<string, string>;
    membershipSpecs?: Map<string, MembershipFeatureSpec>;
    membershipStates?: Map<string, MembershipFeatureState>;
    name?: string;
    resourceState?: FeatureResourceState;
    spec?: CommonFeatureSpec;
    state?: CommonFeatureState;
    updateTime?: string;
}
