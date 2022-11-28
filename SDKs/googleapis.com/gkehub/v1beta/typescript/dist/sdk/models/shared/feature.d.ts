import { SpeakeasyBase } from "../../../internal/utils";
import { MembershipFeatureSpec } from "./membershipfeaturespec";
import { MembershipFeatureState } from "./membershipfeaturestate";
import { FeatureResourceState } from "./featureresourcestate";
import { ScopeFeatureState } from "./scopefeaturestate";
import { CommonFeatureSpec } from "./commonfeaturespec";
import { CommonFeatureState } from "./commonfeaturestate";
import { MembershipFeatureSpecInput } from "./membershipfeaturespec";
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
