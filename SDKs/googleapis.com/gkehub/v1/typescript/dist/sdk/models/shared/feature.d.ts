import { SpeakeasyBase } from "../../../internal/utils";
import { MembershipFeatureSpecInput } from "./membershipfeaturespec";
import { FeatureResourceState } from "./featureresourcestate";
import { CommonFeatureSpec } from "./commonfeaturespec";
import { CommonFeatureState } from "./commonfeaturestate";
import { MembershipFeatureSpec } from "./membershipfeaturespec";
import { MembershipFeatureState } from "./membershipfeaturestate";
import { ScopeFeatureState } from "./scopefeaturestate";
/**
 * Feature represents the settings and status of any Hub Feature.
**/
export declare class FeatureInput extends SpeakeasyBase {
    labels?: Map<string, string>;
    membershipSpecs?: Map<string, MembershipFeatureSpecInput>;
    resourceState?: FeatureResourceState;
    scopeSpecs?: Map<string, Map<string, any>>;
    spec?: CommonFeatureSpec;
    state?: CommonFeatureState;
}
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
    scopeSpecs?: Map<string, Map<string, any>>;
    scopeStates?: Map<string, ScopeFeatureState>;
    spec?: CommonFeatureSpec;
    state?: CommonFeatureState;
    updateTime?: string;
}
